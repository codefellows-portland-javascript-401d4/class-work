var greet = require('../lib/greet');
var assert = require('chai').assert;
var faces = require('cool-ascii-faces').faces;

describe('greeter', function() {
    
    var greeting = greet('foo');
    // store the regex literal for using twice
    var regex = /^hello foo/;

    it('starts hello and name', function() {
        // test the beginning of the greeting
        assert.match(greeting, regex);
    });

    it('end with cool face', function() {    
        // isolate the cool ascii face at end of greeting
        var face = greeting.replace(regex, '');

        // make sure the face is one of the valid faces
        assert.isAbove(faces.indexOf(face), 0);
    });
});