// An array is a special variable, which can hold more than one value: 
//An array can hold many values under a single name, and you can access the values by referring to an index number.


var cars =  ["Volvo","BMW","Audi"];

console.log(cars);
console.log(cars[0]);

cars.pop();// remove element from at the end
console.log(cars);

cars.push("Farari");// add element at the end of the array
console.log(cars);

//console.log(cars.length);// to find the lenght of the array

// used to remove a item at the front of the array.

// console.log(cars.shift());
// console.log(cars.shift());
// console.log(cars.shift());
// console.log(cars.unshift());// unshift is used to add item at the frot of the array.
// console.log(cars.unshift("First"));
// console.log(cars);
// console.log(cars.unshift("Second"));
// //console.log(cars);

var cars = ["First","Second","Third","fourth"];
console.log(cars);

console.log(cars.splice(0,2)); //splice(pos, n) this method is used for remove item for the paeticular position -> pos indicate the starting position and n indicate the number of element when we set the pos and n in the splice method then remaining that element are deleted

// for example we set the cars.splice(0,2) then the first two element are there and remaining last two element are remove


// slice method 
// The slice() method creates a new array.

// The slice() method does not remove any elements from the source array.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,4);// in slice first number indicate the position of the element and 2nd number indicate the number of the element
console.log(citrus);