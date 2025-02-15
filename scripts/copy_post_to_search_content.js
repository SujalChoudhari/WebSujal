const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, "..", "content", "blog");
const destDir = path.resolve(__dirname, '..', 'portfolio', 'src', 'lib', 'content');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
}
fs.readdirSync(destDir).forEach(file => {
    const filePath = path.join(destDir, file);
    fs.unlinkSync(filePath);
});

const allContent = {};

fs.readdirSync(srcDir).forEach(file => {
    const srcPath = path.join(srcDir, file);
    if (path.extname(file) !== '.mdx') return;
    const key = path.basename(file, '.mdx');
    const content = fs.readFileSync(srcPath, 'utf8');
    allContent[key] = content;
});

const exportString = `export default ${JSON.stringify(allContent, null, 2)};`;
fs.writeFileSync(path.join(destDir, 'allContent.ts'), exportString);
