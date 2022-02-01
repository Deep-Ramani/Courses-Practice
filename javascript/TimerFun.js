function detail(firstName,lastName) {
    console.log(`This is the ${firstName} ${lastName}`);
}
// detail("Deep","Ramani")

timeout = setTimeout(detail,5000,"Deep","Ramani");
console.log(timeout);
// clearTimeout(timeout);
timeout1=setInterval(detail, 2000, "Deep", "Ramani");
clearInterval(timeout1);

console.log("Hello");

