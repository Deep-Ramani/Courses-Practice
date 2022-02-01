// Enum 
//Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

 enum Languageknow { English, Hindi, Gujrati}

let student = {
    Name:"Deep",
    Age:21,
    Sex:"Male",
    Language: Languageknow[Languageknow.Gujrati]
} // this array for the single value


let studentList = [
    {Name:"Jay", Age:18, Sex:"Male", Language: Languageknow[Languageknow.English]},
    {Name:"Ajay",Age:21, Sex:"Male", Language:Languageknow[Languageknow.Hindi]}
]

studentList.push(student); // for add the element in the studentlist
// console.log(studentList);


// for itreating the value

for (let index = 0; index < studentList.length; index++) {
    const element = studentList[index];
    console.log(element);
    
    // we can use the different formatting for the display the value.

    console.log("Name is " + element.Name + " with the age " + element.Age + " with sex " + element.Sex + "With language know" + element.Language);
    
}

function GetStudentList(student:any[]) {
    student.forEach(element =>{
        console.log(console.log("Name is " + element.Name + " with the age " + element.Age + " with sex " + element.Sex + "With language know" + element.Language));
        
    })
}