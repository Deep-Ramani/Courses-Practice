if (false) {
    console.log('this is the first if block');
}
else if (true) {
    console.log('This is the second if block');
}else{
    console.log('This is the else block');
}


// example of allow access to user or not

var whoIsHere ='techer'

if (whoIsHere === 'user') {
    console.log("Allow user to all the course")
    
}else if (whoIsHere === 'techer') {
    console.log("Allow course to techer")
}else{
    console.log('Invalid user and techer')
}

// Marks

var marks=5

if (marks === 10) {
    console.log('Amazing')
}else if (marks=== 5)
{
    console.log("Good")
}else if (marks===3) {
    console.log('poor')
}else{
    console.log('fail')
}