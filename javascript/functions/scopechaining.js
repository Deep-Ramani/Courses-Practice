var name="Deep";

console.log("Line no 3",name);

function sayName() {
   // var name="Deep1";
    console.log("Line no 7",name);

    sayName1();
    function sayName1() {
         //var name="Deep2";
         console.log("Line no 12",name);
     }
}
sayName();



