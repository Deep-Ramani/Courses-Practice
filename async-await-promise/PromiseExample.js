let stocks = {
    Fruits : ["Strawberry", "Grapes", "banana", "apple"],
    liquid : ["water","ice"],
    holder : ["cone", "Cup", "Stick"],
    toppings: ["chocolate","penuts"]
};

let is_shop_open= true;

const order = (time,work) =>{
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work());
            },time);
        }else{
            reject(console.log("Our shop is closed"));

        }
    })
}

 order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>{
    return order(1000, ()=>console.log("Producation has started"))
})

.then(()=>{
    return order(1000, ()=>console.log("The fruits has been choped"))
})

.then(()=>{
    return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
})

.then(()=>{
    return order(1000,()=>console.log("The machine was started"))
})


.then(()=>{
    return order(1000,()=>console.log(`${stocks.holder[0]}was placed`))
})

.then(()=>{
    return order(1000,()=>console.log(`${stocks.toppings[0]} was added as a poppings`))
})

.then(()=>{
    return order(1000,()=> console.log("Serve the ice cream"))
})

.catch(()=>{
    return console.log("Customer Left");
})

.finally(()=>{
    return order(2000,()=>console.log("day ended, shop is closed"));
});



console.log("Start");


setTimeout(function cb(){
    console.log("callback");
},5000);

console.log("End");