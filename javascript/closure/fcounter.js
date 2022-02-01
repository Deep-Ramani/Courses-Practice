function outer() {
    

    let counter =0;
    function incrementCounter() {
        counter ++;
    }
    return incrementCounter();
}
const result = outer();
console.log(result);