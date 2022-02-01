// Create a application with following  roles;
// admin - gets full access
// subadmin- gets access to create/delete course.
// testprep - gets access to create/delete course.
// user - gets access to consume content;


var user = "subadmin";

switch(user){
    case "admin":
        console.log("Gets Full course");
        break;
    case "subadmin":
        console.log("Gets access to creare/delete course");
        break;
    case "testprep":
        console.log("Gets access to create/delete course");
        break;
    case "user":
        console.log("Gets access to consume content");
        break;
    default:
        console.log("Trial User");
        break;

}