const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');
const PDFParser = require('pdf2json');

const INPUT_PDF = path.join('/Users/manishkumar/Desktop/Sem III His.pdf'); 
const OUTPUT_DIR = path.join(__dirname, '../public/admit-cards');

const REG_REGEX = /Registration Number\s*:\s*(\d+)/gi;
const DOB_REGEX = /DOB\s*:\s*([\d]{1,2}\s+[A-Za-z]{3}\s+\d{4})/gi;
const ROLL_REGEX = /Exam Roll Number\s*:\s*(\d+)/gi; // New regex

async function processPdf() {
  if (!fs.existsSync(INPUT_PDF)) {
    console.error(`❌ ERROR: Could not find ${INPUT_PDF}`);
    process.exit(1);
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('📚 Reading original PDF to extract text...');
  const dataBuffer = fs.readFileSync(INPUT_PDF);

  // We use pdf2json for robust text extraction
  const pdfParser = new PDFParser(this, 1);
  
  let fullText = '';
  try {
    fullText = await new Promise((resolve, reject) => {
      pdfParser.on("pdfParser_dataError", errData => reject(errData.parserError));
      pdfParser.on("pdfParser_dataReady", () => {
          resolve(pdfParser.getRawTextContent());
      });
      pdfParser.loadPDF(INPUT_PDF);
    });
  } catch (err) {
    console.error("❌ ERROR failed to parse PDF with pdf2json:", err);
    process.exit(1);
  }

  const regMatches = [...fullText.matchAll(REG_REGEX)].map(m => m[1]);
  const dobMatches = [...fullText.matchAll(DOB_REGEX)].map(m => m[1]);
  const rollMatches = [...fullText.matchAll(ROLL_REGEX)].map(m => m[1]);

  console.log(`Found ${regMatches.length} Registration Numbers.`);
  console.log(`Found ${dobMatches.length} DOBs.`);
  console.log(`Found ${rollMatches.length} Exam Roll Numbers.`);

  if (rollMatches.length === 0) {
    console.error("❌ ERROR: Could not find any Exam Roll Numbers. The Regex failed. The PDF text might be formatted differently.");
    return;
  }

  // Build Metadata using ROLL NUMBER as Key
  const metadata = {};
  rollMatches.forEach((roll, index) => {
    metadata[roll] = dobMatches[index] || '';
  });

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'metadata.json'), 
    JSON.stringify(metadata, null, 2)
  );
  console.log('✅ Created metadata.json for search authentication.');

  console.log('✂️  Now slicing the PDF into individual cards...');
  const originalPdfDoc = await PDFDocument.load(dataBuffer);
  const pages = originalPdfDoc.getPages();

  let studentIndex = 0;

  for (let i = 0; i < pages.length; i++) {
    // Top Half
    if (studentIndex < rollMatches.length) {
      const topRoll = rollMatches[studentIndex];
      const newPdfTop = await PDFDocument.create();
      const [copiedTop] = await newPdfTop.copyPages(originalPdfDoc, [i]);
      const { width, height } = copiedTop.getSize();
      
      const middleGapOffset = 18;
      copiedTop.setCropBox(0, (height / 2) + middleGapOffset, width, (height / 2) - middleGapOffset);
      newPdfTop.addPage(copiedTop);
      
      const topPdfBytes = await newPdfTop.save();
      fs.writeFileSync(path.join(OUTPUT_DIR, `${topRoll}.pdf`), topPdfBytes);
      studentIndex++;
    }

    // Bottom Half
    if (studentIndex < rollMatches.length) {
      const bottomRoll = rollMatches[studentIndex];
      const newPdfBottom = await PDFDocument.create();
      const [copiedBottom] = await newPdfBottom.copyPages(originalPdfDoc, [i]);
      const { width, height } = copiedBottom.getSize();
      
      const middleGapOffset = 18;
      copiedBottom.setCropBox(0, 0, width, (height / 2) - middleGapOffset);
      newPdfBottom.addPage(copiedBottom);
      
      const bottomPdfBytes = await newPdfBottom.save();
      fs.writeFileSync(path.join(OUTPUT_DIR, `${bottomRoll}.pdf`), bottomPdfBytes);
      studentIndex++;
    }
  }

  console.log(`🎉 Successfully generated ${studentIndex} individual admit card PDFs named by Exam Roll Number!`);
}

processPdf().catch(console.error);
