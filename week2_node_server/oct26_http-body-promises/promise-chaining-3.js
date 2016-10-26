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

// no catch? no notification
// myAsyncFn('bad.txt')
//     .then(filename => {
//         return myAsyncFn(filename.toString());
//     })
//     .then(buffer => {
//         console.log(buffer.toString());
//     });

Promise.resolve(9)
    .then(value => {
        if (value < 10) throw new Error('less than 10');
        return 12 * 2;
    })
    .then(value => {
        console.log(value);
    })
    .catch(err => {
        console.error('ERROR!', err.message)
    });