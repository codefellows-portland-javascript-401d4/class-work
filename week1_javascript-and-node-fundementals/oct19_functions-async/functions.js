
// this works because foo is a function definition
console.log(foo(401));

function foo(name, age) {
    return 'hello ' + name;
}

// this won't work:
// console.log(bar(401));

// this is an function expression
(function bar(name) {
    return 'hello ' + name;
});

// what will happen here?
// console.log(qux(401));

// so is this:
var qux = function (name) {
    return 'hello ' + name;
};

console.log(foo.name, foo.length);


function nameFn(name){

}
// redundant because same signature
const fn = name => {
    nameFn(name);
}