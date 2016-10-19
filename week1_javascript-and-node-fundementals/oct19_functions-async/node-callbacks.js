const fs = require('fs');

fs.readFile('fs.js', 'utf-8', (err, result) => {
    if(err) return console.log('error :(', err);

    const lines = result.split('\n');
    const upper = lines.map(line => line.toUpperCase());
    console.log(upper.join('\n'));
});