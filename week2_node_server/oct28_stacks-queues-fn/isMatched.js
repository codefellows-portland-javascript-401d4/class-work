const Stack = require('./Stack');

function isMatched(str) {
    const stack = new Stack();

    let char;
    for(var i = 0; i < str.length; i++) {
        char = str[i];
        if (char === '(') {
            stack.push(char);
        }
        else if(char === ')') {
            if(stack.pop() !== '(') return false;
        }
    }

    // left overs?
    return !stack.pop();
}

const tests = [
    { in: `()`, out:  true },
    { in: `((` , out: false },
    { in: `(() ())`, out:  true },
    { in: `(())`, out:  true },
    { in: `) this ( is word )(` , out: false },
    { in: `( this ( is( matched )))`, out:  true },
    { in: `this ( is ( matched ))`, out:  true },
    { in: `( this ( is not matched )))` , out: false },
    { in: `)` , out: false },
    { in: `(` , out: false }
]

tests.forEach(test => {
    const actual = isMatched(test.in);
    const pass = actual === test.out;
    console.log(test.in, actual, pass ? 'pass' : 'fail');
});