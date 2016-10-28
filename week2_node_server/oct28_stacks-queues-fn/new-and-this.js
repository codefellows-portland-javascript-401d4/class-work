
function Cat(name) {
    this.name = name;
    this.sayHello = function() {
        return `meow, i am ${this.name}`;
    }
}

// `new` trumps `bind`
// BoundCat = Cat.bind({ name: 'tom' });
// console.log(new BoundCat('felix').sayHello());
// but why would you ever do this?

const rawObject = Object.create({});
Cat.call(rawObject, 'felix');
console.log(rawObject.sayHello());

function TabbyCat(name) {
    Cat.call(this, name + ' the tabby');
}

// create the prototype:
TabbyCat.prototype = Object.create(Cat.prototype);
// but don't run the constuctor! (don't do this!)
// TabbyCat.prototype = new Cat();

// Same as:
class TabbyCatES6 extends Cat {
    constructor(name) {
        super(name + ' the tabby');
    }
}