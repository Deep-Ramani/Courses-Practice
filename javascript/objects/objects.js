var user = {
    userid : 1,
    firstName : "Deep",
    lastName : "Ramani",
    age : 21,
    role : "admin",
    city : "Rajkot",
    state : "Gujrat"
};

console.log(user);
console.table(user);

console.log(user.firstName);


//adding new property in the object

user.contact = "5444";

console.log(user);

// delete property -> The delete keyword deletes both the value of the property and the property itself.

//After deletion, the property cannot be used before it is added back again.

delete user.contact;
console.log(user);



const person={
    firstName : "Jay",
    lastName : "Ramani",
    fullName : function () {
            return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());


