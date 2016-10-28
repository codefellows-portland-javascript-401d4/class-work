
// function countDown(n) {
//     if(!n) return '';
//     return n + ', ' + countDown(n-1);
// }

// const result = countDown(5);
// console.log(result);

function one(n){
    return two(n) + 1;
}
function two(n){
    return three(n) + 1;
}
function three(n){
    return n + 1;
}

one(2);