const fs = require('fs');

// javascript (node io) async usually
// requires us to pass a function
fs.readFile('fs.js', (err, data) => {
    console.log(data);
});

const stream = fs.createReadStream('fs.key');

stream.on('data', data => {
    console.log('chunk:', data)
});

stream.on('end', data => {
    console.log('all done');
})