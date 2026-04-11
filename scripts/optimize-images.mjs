/**
 * Image Optimization Script for MKR College
 * - Converts PNG/JPG to optimized WebP
 * - Resizes oversized images (max 1920px wide)
 * - Generates tiny blur placeholder base64 strings
 */

import sharp from 'sharp';
import { readdir, stat, writeFile, mkdir } from 'fs/promises';
import { join, extname, basename, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');
const IMAGES_DIR = join(PUBLIC_DIR, 'images');
const ASSETS_DIR = join(PUBLIC_DIR, 'assets');

const MAX_WIDTH = 1920;
const QUALITY_JPG = 80;
const QUALITY_WEBP = 80;
const BLUR_SIZE = 20; // tiny placeholder size

async function getAllImageFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getAllImageFiles(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name) && !entry.name.startsWith('.')) {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const relPath = relative(PUBLIC_DIR, filePath);
  
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    console.log(`\n📷 ${relPath}`);
    console.log(`   Original: ${metadata.width}x${metadata.height}, ${ext}`);
    
    let pipeline = sharp(filePath);
    
    // Resize if too wide
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      console.log(`   ↳ Resized to max ${MAX_WIDTH}px wide`);
    }
    
    // Convert PNG to WebP, optimize JPG
    if (ext === '.png') {
      const webpPath = filePath.replace(/\.png$/i, '.webp');
      await pipeline.webp({ quality: QUALITY_WEBP }).toFile(webpPath);
      const newStat = await stat(webpPath);
      console.log(`   ↳ Converted to WebP: ${(newStat.size / 1024).toFixed(0)}KB`);
    } else {
      // Optimize JPG in-place
      const buffer = await pipeline.jpeg({ quality: QUALITY_JPG, mozjpeg: true }).toBuffer();
      await writeFile(filePath, buffer);
      console.log(`   ↳ Optimized JPG: ${(buffer.length / 1024).toFixed(0)}KB`);
    }
    
    // Generate blur placeholder
    const blurBuffer = await sharp(filePath.replace(/\.png$/i, ext === '.png' ? '.webp' : ext))
      .resize(BLUR_SIZE, null, { withoutEnlargement: true })
      .blur(2)
      .jpeg({ quality: 20 })
      .toBuffer();
    
    const base64 = `data:image/jpeg;base64,${blurBuffer.toString('base64')}`;
    console.log(`   ↳ Blur placeholder: ${base64.length} chars`);
    
    return { path: '/' + relPath, base64, width: metadata.width, height: metadata.height };
  } catch (err) {
    console.error(`   ❌ Error: ${err.message}`);
    return null;
  }
}

async function main() {
  console.log('🚀 MKR College Image Optimizer\n');
  console.log('=' .repeat(50));
  
  const imageFiles = await getAllImageFiles(IMAGES_DIR);
  console.log(`Found ${imageFiles.length} images to optimize\n`);
  
  const placeholders = {};
  
  for (const file of imageFiles) {
    const result = await optimizeImage(file);
    if (result) {
      // Store with the web-accessible path
      const webPath = result.path.replace(/\.png$/i, '.webp');
      placeholders[webPath] = result.base64;
      // Also store original path for reference
      placeholders[result.path] = result.base64;
    }
  }
  
  // Save blur placeholders as a JSON file
  const outputPath = join(__dirname, '..', 'src', 'lib', 'blur-placeholders.json');
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, JSON.stringify(placeholders, null, 2));
  
  console.log('\n' + '='.repeat(50));
  console.log(`\n✅ Done! ${Object.keys(placeholders).length} blur placeholders saved to:`);
  console.log(`   src/lib/blur-placeholders.json`);
  console.log(`\nUse these in your components like:`);
  console.log(`   import placeholders from '@/lib/blur-placeholders.json'`);
  console.log(`   <Image placeholder="blur" blurDataURL={placeholders['/images/hero/college-hero.jpg']} />`);
}

main().catch(console.error);
