import fetch from "node-fetch"
console.log("This example is async await");

async function hello(){
    console.log("Inside the hello function");

    const response = await fetch('https://reqres.in/api/users?page=2');


    return "hello"
}

console.log("Before calling the hello function");
let a =  hello(); 
console.log("After calling hello function");
console.log(a);
console.log("Last line of the js file");