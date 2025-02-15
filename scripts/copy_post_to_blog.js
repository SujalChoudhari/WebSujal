const fs = require('fs');
const path = require('path');

// Define source and destination directories
const blogSrcDir = path.resolve(__dirname, "..", "content", "blog");
const imagesSrcDir = path.resolve(__dirname, "..", "content", "images");

const blogDestDir = path.resolve(__dirname, "..", "blog", "src", "content", "posts");
const imagesDestDir = path.resolve(__dirname, "..", "blog", "public", "images", "posts");

// Function to copy files and directories recursively
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

// Copy blog content
copyFiles(blogSrcDir, blogDestDir);

// Copy images
copyFiles(imagesSrcDir, imagesDestDir);

console.log("Blog content and images have been copied successfully!");
