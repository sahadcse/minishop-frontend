import fs from 'fs';
import path from 'path';
import https from 'https';

// Use strict absolute path relative to the known project root
const projectRoot = String.raw`e:\WORKS\[FINAL]-portfolioProjects\minishop\minishop-frontend`;
const destDir = path.join(projectRoot, 'public', 'images', 'choose-section');

console.log(`Creating directory: ${destDir}`);
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const images = [
    { url: 'https://preview.colorlib.com/theme/minishop/images/choose-1.jpg.webp', name: 'men.jpg' },
    { url: 'https://preview.colorlib.com/theme/minishop/images/choose-2.jpg.webp', name: 'women.jpg' },
    { url: 'https://preview.colorlib.com/theme/minishop/images/about-1.jpg.webp', name: 'bestsellers.jpg' }
];

let completed = 0;

images.forEach(img => {
    const filePath = path.join(destDir, img.name);
    const file = fs.createWriteStream(filePath);
    console.log(`Downloading ${img.url} to ${filePath}`);

    https.get(img.url, function (response) {
        if (response.statusCode !== 200) {
            console.error(`Failed to download ${img.name}: Status ${response.statusCode}`);
            return;
        }
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${img.name}`);
            completed++;
            if (completed === images.length) {
                console.log('All downloads completed.');
            }
        });
    }).on('error', (err) => {
        fs.unlink(filePath, () => { }); // Delete the file async. (But we don't check result)
        console.error(`Error downloading ${img.name}: ${err.message}`);
    });
});
