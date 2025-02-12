const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, "..", 'content');
const destDir = path.resolve(__dirname, "..", "blog", "src", "content", "posts");

function copyFiles(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyFiles(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

copyFiles(srcDir, destDir);