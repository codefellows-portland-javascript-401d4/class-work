'use strict';

function sayHello(greeting, food = 'tuna') {
    // we can access the arguments via:
    // console.log(arguments);
    return `${greeting}, i am ${this.name}. feed me ${food}.`;
}

const obj = { name: 'tom' };

// throws because we use this.name
// however, context is not a required parameter
// console.log(sayHello.call(undefined, 'meow'));

// console.log(sayHello.call(obj, 'meow', 'tuna'));
// console.log(sayHello.apply(obj, ['meow', 'tuna']));

const bound = sayHello.bind(obj);

// function bound(){
//     return sayHello.apply(obj, arguments);
// }

console.log(bound('meow'));
console.log(bound.call({ name: 'me' }, 'meow', 'tuna'));

// pattern for binding array to object
function DataStructure() {
    const arr = [];
    this.add = arr.push.bind(arr); 
}