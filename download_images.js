const fs = require('fs');
const path = require('path');
const https = require('https');

const componentsDir = path.join(__dirname, 'src/components');
const publicDir = path.join(__dirname, 'src/public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(filepath)) {
      resolve();
      return;
    }
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => reject(err));
    });
  });
}

async function processFiles() {
  const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.js'));
  let totalImages = 0;
  
  for (const file of files) {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    const regex = /https:\/\/snfconsulting\.com\/wp-content\/uploads\/[a-zA-Z0-9\/\-_.]+\.(jpg|jpeg|png|webp|svg)/g;
    const matches = content.match(regex);
    
    if (matches) {
      for (const url of matches) {
        const filename = path.basename(url);
        const destPath = path.join(publicDir, filename);
        
        console.log(`Downloading ${filename}...`);
        try {
          await downloadImage(url, destPath);
          content = content.replace(url, `./${filename}`);
          totalImages++;
        } catch (e) {
          console.error(`Error downloading ${url}:`, e.message);
        }
      }
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${file}`);
    }
  }
  console.log(`\nSelesai! Berhasil mendownload ${totalImages} gambar dan memperbarui file komponen.`);
}

processFiles().catch(console.error);
