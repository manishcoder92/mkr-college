import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputImage = '/Users/manishkumar/.gemini/antigravity/brain/ac71892f-6fb9-4826-83f6-b4f3734d7274/media__1776259751762.jpg';
const outputDesktop = path.join(__dirname, '../public/images/hero/hero-mkr-final.webp');
const outputMobile = path.join(__dirname, '../public/images/hero/hero-mkr-final-mobile.webp');

async function processImages() {
  try {
    // 1. Process Desktop Version (1920x900)
    await sharp(inputImage)
      .resize({
        width: 1920,
        height: 900,
        fit: 'cover',
        position: 'center'
      })
      // Enhance brightness, contrast, saturation slightly
      .modulate({
        brightness: 1.05,
        saturation: 1.1
      })
      // Apply linear adjustment to simulate contrast
      .linear(1.05, -(0.05 * 255))
      // Add subtle dark overlay by drawing a semi-transparent black rectangle over it
      // using composite
      .composite([
        {
          input: Buffer.from('<svg><rect x="0" y="0" width="1920" height="900" fill="rgba(0,0,0,0.15)"/></svg>'),
          blend: 'overlay'
        }
      ])
      // Sharpen
      .sharpen()
      .webp({ quality: 85 })
      .toFile(outputDesktop);
      
    console.log(`✅ Desktop image saved to: ${outputDesktop}`);

    // 2. Process Mobile Version (768x900 - taller for mobile viewing)
    await sharp(inputImage)
      .resize({
        width: 768,
        height: 900,
        fit: 'cover',
        position: 'center'
      })
      .modulate({
        brightness: 1.05,
        saturation: 1.1
      })
      .linear(1.05, -(0.05 * 255))
      .composite([
        {
          input: Buffer.from('<svg><rect x="0" y="0" width="768" height="900" fill="rgba(0,0,0,0.15)"/></svg>'),
          blend: 'overlay'
        }
      ])
      .sharpen()
      .webp({ quality: 80 })
      .toFile(outputMobile);
      
    console.log(`✅ Mobile image saved to: ${outputMobile}`);

  } catch (error) {
    console.error('❌ Error processing images:', error);
  }
}

processImages();
