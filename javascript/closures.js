//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

function init() {
    function sayFirstname() {
        var firstname ="Deep";
        console.log(firstname); 
    }
    return sayFirstname;
}
var value = init();
value();



function doAddition(x) {
    return function (y) {
        return x + y;
    }
}


var add5 = doAddition(4);
console.log(add5(5));// one method is to addition


console.log(doAddition(4)(4));// second method 