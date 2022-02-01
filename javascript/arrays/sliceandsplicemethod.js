// Slice method is used to select the particaulr element 

var name=["ab","bc","cd","de","ef"];

console.log(name.slice(1,3)); // note that when we select any element then ending number is not consider for ex we put the .slice(1,3) then the starting position is 1st and the ending position is 3 but the number is print only available position at 1st and 2nd -> in the slice the end value is exclusive that means they can't print


//splice

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice(). 

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
