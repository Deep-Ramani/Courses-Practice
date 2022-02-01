// user is only allowed to make a purhcase when he is
// logged in
// email verfied
// carinfo -valid
// if anyone is missing then stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var carInfo = true;

// if (isLoggedIn) {
//     console.log("Logged in Success");

//     if (isEmailVerified) {
//         console.log("Email is verified");
//         if (carInfo) {
//             console.log("You can purchasr car");
//         }
//     }
// } // this is one way we can verified 

// this is the second way using the && operator

// && and operator is used when all conditions are true if the given condition is not true then the loop will execute the else part.

if (isLoggedIn && isEmailVerified && carInfo) {
    console.log("You can purchase a car");
}else{
    console.log("You can not purchase a car");
}