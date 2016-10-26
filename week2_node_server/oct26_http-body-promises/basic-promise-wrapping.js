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

const promise = myAsyncFn('faux-promise.js');

promise.then(buffer => {
        console.log('first then', buffer.length );
    }, err => {
        console.error('first then err', err );
    });

promise.then(buffer => {
        console.log('second then', buffer.length );
    }, err => {
        console.error('second then err', err );
    });