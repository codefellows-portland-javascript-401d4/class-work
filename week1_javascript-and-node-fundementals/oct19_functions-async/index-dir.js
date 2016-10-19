const fs = require('fs');

const path = require('path');

const indexFile = 'index.txt';

module.exports = function(dir, cb) {
    
    // read the files in the requested directory
    fs.readdir(dir, (err, files) => {
        if (err) return cb(err);
        // use path to put an index.txt file in the dir
        const fileToWrite = path.join(dir, indexFile);
        const dataToWrite = files
            .filter(f => f !== indexFile)
            .join('\n');
        fs.writeFile(fileToWrite, dataToWrite, (err) => {
            if (err) return cb(err);
            cb();
        });
    });
}