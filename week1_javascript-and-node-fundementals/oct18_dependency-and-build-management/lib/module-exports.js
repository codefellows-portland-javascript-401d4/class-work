
// this is okay
exports.foo = function(){};
exports.bar = function(){};

// this won't work
exports = {
    foo: function(){},
    bar: function(){}
};

// better
module.exports = {
    foo: function(){},
    bar: function(){}
};