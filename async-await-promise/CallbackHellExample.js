let stocks = {
    Fruits : ["Strawberry", "Grapes", "banana", "apple"],
    liquid : ["water","ice"],
    holder : ["cone", "Cup", "Stick"],
    toppings: ["chocolate","penuts"]
};

// console.log(stocks.Fruits[2]);





const order = (call_producation) =>{

    setTimeout (()=>{
        console.log(`${stocks.Fruits[0]} order was created`);
        call_producation();
    },2000)
    
}

const production = () => {

    setTimeout(()=>{
        console.log("Production has sarted");

        setTimeout(()=>{
            console.log("the fruits has been chooped");

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(()=>{
                    console.log("The machine was started");


                    setTimeout(()=>{
                        console.log((`The   ${stocks.holder[0]} was palced on`));

                        setTimeout(()=>{
                                console.log(`${stocks.toppings[0]} was added as a toppings`);

                                setTimeout(()=>{
                                    console.log("Serve the Ice Cream");
                                },2000)
                        },2000)
                    },2000)
                },1000)
            },2000)
        },2000)
    },1000)
    // console.log("order received");
}
order(production)