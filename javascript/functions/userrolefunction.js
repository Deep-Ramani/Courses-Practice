/*
Define a function that can answer the role of a user.
A user can be following roles:
admin - with all access
subadmin - with the access to create/delete course.
testpre - with the access to create/delete preps.
user - consume all content.
other - trial user.


*/

function getUserRole(name ,role) 
// or we can write this funcation -> var getUserRole = function (name,role) <-
{
    switch (role) {
        case "admin":
            return `${name} with all access`;
        case "subadmin":
            return `${name} with the access to create/delete course`;
        case "testpre":
            return `${name} with the access to create/deleter preps`;
        case "user":
            return `${name} consume all content`
        default:
            return `${name} is a trial user`
        
    }
}


// by direct calling the funcation
console.log(getUserRole("Deep","admin"));

// using the vaariable

var role = getUserRole("Jay","subadmin");

console.log(role);