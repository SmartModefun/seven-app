const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const www = path.join(root, 'www');

if (!fs.existsSync(www)) {
    fs.mkdirSync(www, { recursive: true });
}

const extensions = new Set(['.html', '.css', '.js', '.xml', '.png', '.ico', '.svg', '.json', '.txt', '.htaccess']);

const rootFiles = fs.readdirSync(root).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return extensions.has(ext) && fs.statSync(path.join(root, f)).isFile();
});

for (const file of rootFiles) {
    fs.copyFileSync(path.join(root, file), path.join(www, file));
}

const assetsSrc = path.join(root, 'assets');
const assetsDst = path.join(www, 'assets');
if (fs.existsSync(assetsSrc)) {
    if (!fs.existsSync(assetsDst)) {
        fs.mkdirSync(assetsDst, { recursive: true });
    }
    const assetFiles = fs.readdirSync(assetsSrc);
    for (const file of assetFiles) {
        const srcPath = path.join(assetsSrc, file);
        if (fs.statSync(srcPath).isFile()) {
            fs.copyFileSync(srcPath, path.join(assetsDst, file));
        }
    }
}

console.log('✓ Web assets synced to www/');
