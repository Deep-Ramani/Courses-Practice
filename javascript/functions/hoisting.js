// Executoin Context
//there are generally two rules.

// Function declarations are scanned and made available
// Variable declarations are scanned and made undefined.

tipper("80"); //Function declarations are scanned and made available

function tipper(a) {
  var bill = parseInt(a);// parseInt is used to when we enter the value any string or we can say without any int value then parseInt convert the any type of the value into the integer value.
  console.log(bill + 5);
}


//tipper2(10); // This gives error because tipper2 is a variable "Variable declarations are scanned and made undefined."

var tipper2=function (a) {
  var bill = parseInt(a);
  console.log(bill + 10);
}

tipper2(10)

console.log(name);// this is print undefined because the calling the variable before the define

var name="deep";

function name1() {
  var name = "Mr. Deep";
  console.log(name);
}
name1();  // this will print the name that are in function

console.log(name);// this print the name that are declare in before the function