const indexDir = require('./index-dir');
const assert = require('assert');
const fs = require('fs');

it('writes directory list', done => {

    const callback = (err) => {
        if (err) return done(err);

        // indexDir has finished it's work.
        // NOW we can test if things are correct
        // go read the index file so we can test if it worked
        fs.readFile('./test-dir/index.txt', 'utf-8', (err, index) => {
            // unnecessary because index is probably undefined
            // if (err) return done(err);

            // coercive equality, aka ==
            assert.equal(index, 'bar.txt\nfoo.txt\nqux.txt');
            done(); // what do we do if error?
        });
    };

    indexDir('./test-dir', callback);

});

it('writes directory list take 2', done => {

    indexDir('./test-dir', (err) => {
        if (err) return done(err);
        const index = fs.readFileSync('./test-dir/index.txt', 'utf-8');
        assert.equal(index, 'bar.txt\nfoo.txt\nqux.txt');
        done(); // what do we do if error?
    });

});