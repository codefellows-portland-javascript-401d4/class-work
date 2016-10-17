var assert = require('assert');
var greet = require('./greet');

describe('greeter', function() {

    it('greets with name', function() {
        // do the thing we want to test
        var greeting = greet('tester');
        // use the assert module to test
        // will throw error for us if not true
        assert.equal( greeting, 'hello tester' );
    });

    it('greets with "friend" when no name given', function() {
        var greeting = greet();
        assert.equal( greeting, 'hello friend' );
    });
});

describe('some other functionality', function() {

    it('this other test...', function() {
        assert.equal(2,2);
    });
});