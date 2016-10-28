
module.exports = class Stack {
    constructor() {
        this.array = [];
    }

    push(item) {
        this.array.push(item);
    }

    pop() {
        return this.array.pop();
    }

    peek() {
        // array = [1, 2, 3]
        // array.length === 3
        // array[2]
        return this.array[this.array.length - 1];
    }
}

