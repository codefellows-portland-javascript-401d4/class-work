const Stack = require('./Stack');

function isPalindrome(str) {
    str = str.replace(" ", '').toLowerCase();
    return str === reverse(str);
}

function reverse(str) {
    const stack = new Stack();
    for(var i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    const reversed = ''
    let letter;
    while(letter = stack.pop()) reversed += letter;

    return reversed;


}

const tests = [
    { in: 'racecar', out: true },
    { in: 'what', out: false },
    { in: 'noon', out: true },
    { in: 'not a palindrome', out: false },
    { in: 'taco cat', out: true }
]

tests.forEach(test => {
    const actual = isPalindrome(test.in);
    const pass = actual === test.out;
    console.log(test.in, actual, pass ? 'pass' : 'fail');
});