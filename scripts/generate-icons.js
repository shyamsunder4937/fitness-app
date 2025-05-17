const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateIcons() {
  const svgBuffer = await fs.readFile(path.join(__dirname, '../public/logo.svg'));
  
  // Generate favicon.ico (16x16, 32x32)
  await sharp(svgBuffer)
    .resize(32, 32)
    .toFile(path.join(__dirname, '../public/favicon.ico'));

  // Generate logo192.png
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(__dirname, '../public/logo192.png'));

  // Generate logo512.png
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(__dirname, '../public/logo512.png'));

  console.log('Icons generated successfully!');
}

generateIcons().catch(console.error); 