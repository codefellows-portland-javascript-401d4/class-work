const cool = require('cool-ascii-faces');

module.exports = function greet(name) {
    return 'hello ' + name + cool();
};

// module export with different functions
// we hang them off a top-level object
// module.exports = {
//     makeGreeting: function(salutation){
//         return function greet(name) {
//             return salutation + ' ' + name + cool();
//         };
//     },
//     makeFarewell: function(salutation){
//         return function greet(name) {
//             return salutation + ' ' + name;
//         };
//     }
// };

// pure factory function being export
// module.exports = function(name){
//     return {
//         sayHello: function(){
//             return 'hello' + ' ' + name + cool();
//         },
//         sayGoodbye: function(){
//             return 'goodbye' + ' ' + name;
//         }
//     };
// };