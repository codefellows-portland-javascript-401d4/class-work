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

const promise = myAsyncFn('README.md');

const promise2 = promise.then(buffer => {
    console.log('first promise file length', buffer.length );
    return myAsyncFn('bad file.js');
});

const promise3 = promise2.then(value => {
    console.log('what value did we get?', value.length);
    return 12;
},
err => {
    console.error(err)
});

promise3.then(value => console.log(value));


myAsyncFn('README.md')
    .then(buffer => {
        console.log('first promise file length', buffer.length );
        return myAsyncFn('closures.js');
    })
    .then(value => {
        console.log('what value did we get?', value.length);
        return 12;
    })
    .then(value => console.log(value));
