class File {
    static getAbsolutePath(file) {
        const path = require('src/filePath/File');
        let fullPath = File.resolve(file);
        return fullPath;
    }
}

module.exports = File;