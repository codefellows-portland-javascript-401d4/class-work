// here's the greet implementation
function greet(name){
    name = name || 'friend';
    return 'hello ' + name;
}

module.exports = greet;