const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Ensure the build directory exists
if (!fs.existsSync('build')) {
  fs.mkdirSync('build');
}

// Create a simple index.html if it doesn't exist
if (!fs.existsSync(path.join('build', 'index.html'))) {
  console.log('Creating a simple index.html...');
  const indexHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Fitness Application" />
    <title>Fitness App</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #f5f5f5;
      }
      .container {
        text-align: center;
        padding: 20px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-width: 600px;
      }
      h1 {
        color: #333;
      }
      p {
        color: #666;
        margin-bottom: 20px;
      }
      .button {
        display: inline-block;
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 4px;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Fitness Application</h1>
      <p>Your comprehensive fitness app for workout routines, nutrition tracking, and exercise programs.</p>
      <a href="https://github.com/shyamsunder4937/fitness-app" class="button">View on GitHub</a>
    </div>
  </body>
</html>
  `;
  fs.writeFileSync(path.join('build', 'index.html'), indexHtml);
}

// Copy any necessary files from public to build
if (fs.existsSync('public')) {
  console.log('Copying files from public directory...');
  const publicFiles = fs.readdirSync('public');
  
  publicFiles.forEach(file => {
    if (file !== 'index.html') {  // Skip index.html as we created our own
      const sourcePath = path.join('public', file);
      const destPath = path.join('build', file);
      
      if (fs.statSync(sourcePath).isFile()) {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied ${file} to build directory`);
      }
    }
  });
}

console.log('Build completed successfully!'); 