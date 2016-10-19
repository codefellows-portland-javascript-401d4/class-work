const fs = require('fs');

// javascript (node io) async usually
// requires us to pass a function
fs.readFile('fs.js', function(err, data){
    console.log(data);
});

const stream = fs.createReadStream('fs.js');

stream.on('data', function(data){
    console.log('chunk:', data);
})
stream.on('end', function(data){
    console.log('all done');
})