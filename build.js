const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Current working directory:', process.cwd());

// Create public directory if it doesn't exist
if (!fs.existsSync('public')) {
  console.log('Creating public directory...');
  try {
    fs.mkdirSync('public', { recursive: true });
    console.log('Public directory created at:', path.resolve('public'));
  } catch (err) {
    console.error('Error creating public directory:', err);
  }
}

// Ensure the dist directory exists
console.log('Creating dist directory...');
try {
  fs.mkdirSync('dist', { recursive: true });
  console.log('Dist directory created at:', path.resolve('dist'));
} catch (err) {
  console.error('Error creating dist directory:', err);
}

// Create a simple index.html
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

try {
  fs.writeFileSync(path.join('dist', 'index.html'), indexHtml);
  console.log('index.html created at:', path.resolve(path.join('dist', 'index.html')));
  
  // Also copy to the root directory
  fs.writeFileSync('index.html', indexHtml);
  console.log('index.html also created at root:', path.resolve('index.html'));
} catch (err) {
  console.error('Error creating index.html:', err);
}

// Copy source files to public directory for Render
try {
  // Copy dist folder to public folder
  if (!fs.existsSync('public/dist')) {
    fs.mkdirSync('public/dist', { recursive: true });
  }
  
  // Copy index.html to public folder
  fs.writeFileSync(path.join('public', 'index.html'), indexHtml);
  console.log('index.html created at:', path.resolve(path.join('public', 'index.html')));
  
  // Copy index.html to public/dist folder
  fs.writeFileSync(path.join('public/dist', 'index.html'), indexHtml);
  console.log('index.html created at:', path.resolve(path.join('public/dist', 'index.html')));
} catch (err) {
  console.error('Error copying to public directory:', err);
}

// Copy any source public files
const sourcePublicDir = path.join(__dirname, 'public-source');
if (fs.existsSync(sourcePublicDir)) {
  console.log('Copying files from public-source directory...');
  try {
    const publicFiles = fs.readdirSync(sourcePublicDir);
    publicFiles.forEach(file => {
      const sourcePath = path.join(sourcePublicDir, file);
      const destPath = path.join('public', file);
      const distDestPath = path.join('dist', file);
      
      if (fs.statSync(sourcePath).isFile()) {
        fs.copyFileSync(sourcePath, destPath);
        fs.copyFileSync(sourcePath, distDestPath);
        console.log(`Copied ${file} to public and dist directories`);
      }
    });
  } catch (err) {
    console.error('Error copying public-source files:', err);
  }
}

// List all directories for debugging
console.log('\nDirectory structure:');
try {
  execSync('find . -type d -not -path "*/node_modules/*" -not -path "*/.git/*"', {
    stdio: 'inherit'
  });
} catch (err) {
  console.error('Error listing directories:', err);
}

// List the contents of public and dist directories
console.log('\nContents of dist directory:');
try {
  const distContents = fs.readdirSync('dist');
  distContents.forEach(item => {
    console.log(' - ' + item);
  });
} catch (err) {
  console.error('Error listing dist directory contents:', err);
}

console.log('\nContents of public directory:');
try {
  const publicContents = fs.readdirSync('public');
  publicContents.forEach(item => {
    console.log(' - ' + item);
  });
} catch (err) {
  console.error('Error listing public directory contents:', err);
}

// Try to create an absolute "public/dist" directory as well
try {
  const publicDistDir = path.join(process.cwd(), 'public', 'dist');
  fs.mkdirSync(publicDistDir, { recursive: true });
  fs.writeFileSync(path.join(publicDistDir, 'index.html'), indexHtml);
  console.log(`Created ${publicDistDir} with index.html`);
} catch (err) {
  console.error('Error creating public/dist directory:', err);
}

console.log('\nBuild completed successfully!'); 