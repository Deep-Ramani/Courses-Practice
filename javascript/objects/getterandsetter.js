var person = {
    firstName : "Deep",
    lastName : "Ramani",
    fullname : function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullname()); // access fullname as a function


var person1={
    firstName: "Jay",
    lastName : "Ramani",
    get fullname(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(person1.fullname);// this is using the getter method