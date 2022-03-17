let stocks = {
  Fruits: ["Strawberry", "Grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "Cup", "Stick"],
  toppings: ["chocolate", "penuts"],
};

let shop = true;

// const order = () =>{

//     return new Promise ((resolve,reject)=>{
//         if(shop){
//             resolve(
//                 console.log("Resolved")
//             )
//         }else{
//             reject(console.log("Reject"))
//         }
//     })
// }

// order()

// .then(()=>{
//     console.log("hello");
// })

// async function order () {
//     try{
//         await abc;
//     }
//     catch(error){
//         console.log("Error are display in catch part",error);
//     }
//     finally{
//         console.log("finally code exexute anyway");
//     }
// }

// order()

// .then(()=>{
//     console.log("fsklnlndlsn");
// })

let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(console.log("Which topping would you love")),
      1000
    );
  });
};

setTimeout(() => {
  console.log("timer function.");
}, 1000);

async function kitchen() {
  console.log(" A ");
  console.log(" B ");
  console.log(" C ");
  await toppings_choice()
    console.log(" D ");
    console.log(" E ");

}

kitchen();

console.log("Cleaning Dishes are running");
console.log("Cleaning table are runnnig");
console.log("Others order are running");

// function time(ms){
//     return new Promise((resolve,reject)=>{
//         if(shop){
//             setTimeout(resolve,ms);
//         }else{
//             reject(console.log("Shop is closed"))
//         }
//     })
// }

// async function kitchen(){
//     try{
//         await time(3000);
//         console.log(`${stocks.Fruits[0]} was selected`);

//         await time(0000);
//         console.log("Production was started");

//         await time(1000);
//         console.log("Cut the fruits");

//         await time(1000);
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`);

//         await time(1000);
//         console.log("The machine was started");

//         await time(2000);
//         console.log(`${stocks.holder[1]} was placed`);

//         await time(1000);
//         console.log(`${stocks.toppings[0]} was added as a poppings`);

//         await time(1000);
//         console.log("serve the Ice Cream");

//     }
//     catch(error){
//         console.log("Customer Left",error);
//     }
//     finally{
//         console.log("Day ended, shop closed");
//     }
// }

// kitchen()
