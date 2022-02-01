const names = ["Deep", "Jay", "Ajay", "Meet", "Sandeep"];
//for of loop 
// for of loop is majorally used for the array where the for in loop is used for the object.
for (const n of names){
    console.log(n);
}



// for in 
// for in loop is majorally used for the objects
const name1={
    firstName:"Deep",
    lastName:"Ramani",
    age:21,
    city:"Rajkot",
    state:"Gujrat"
};

for (const n in name1){
    // console.log(name1[n]);
    console.log(`The key is: ${n} and the value is : ${name1[n]}`);
}