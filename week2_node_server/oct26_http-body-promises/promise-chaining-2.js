const fs = require('fs');
function myAsyncFn(input) {
    return new Promise((resolve, reject) => {
        console.log('about to read the file');
        fs.readFile(input, (err, buffer) => {
            if (err) reject(err)
            else resolve(buffer);
        });
    });
};

myAsyncFn('bad.txt')
    .then(filename => {
        return myAsyncFn(filename.toString());
    })
    // only catches error above
    .catch(err => {
        return myAsyncFn('READ.md');
    })
    // but now promise chain continues
    .then(buffer => {
        console.log(buffer.toString());
    })
    // catches errors since last catch
    .catch(err => {
        console.error('second ERROR!', err);
    });