
function Cat(name) {
    this.name = name;
    this.sayHello = function() {
        return `meow, i am ${this.name}`;
    }
}
const cat = new Cat('felix');
console.log(cat.sayHello());

const sayHello = cat.sayHello;
console.log(sayHello());

