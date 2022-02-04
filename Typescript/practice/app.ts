// Enum 
//Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

import { studentInfo } from "./studentinfo";
import { student } from "./studentinfo";

 enum Languageknow { English, Hindi, Gujrati}
    export{Languageknow}
// this array for the single value


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

//**********************Function**************************** */
// Function can have different types of the parameter.

// 1. parameter with types
// 2. Rest Parameter
// 3. Default Parameter

//1. Parameter with types

function GetStudentList(student:any[]) {
    student.forEach(element =>{
        console.log("Name is " + element.Name + " with the age " + element.Age + " with sex " + element.Sex + "With language know" + element.Language);
        
    })
}

GetStudentList(studentList);


// 2. Rest parameter.

function GetNumbers(...nums:number[]) {
    nums.forEach(element=>{
        console.log("Number:"+element)
    })
}
GetNumbers(1,2,3,4,5,6)


// Default Parameter

function GetInfo(info:string = "Happy") {
        console.log(info);
        
}
GetInfo();



// *************************Anonymous functions***************

// funtion which don't have  Name/identifiers are considered as Anonymous function. These function are dynamic and called during runtime.

let getNames=function (fname:string, lname:string) {
    return fname + " " + lname;
}
console.log(getNames("Deep","Ramani"));


// Arrow funtion/ Lambda function

// lambda function refers to anonymous funtion in programming. Lambda function are a concise mechanism to represent anonymous function. These funtion are also called as arrow function.

// Arrow function

let Details= (fname:string, lname:string)=>{return fname +" "+ lname}

console.log(Details("Deep","Ramani"));


// ********************** Interface ************************



function studentDetails(student:studentInfo[]){ 
    student.forEach(element=>{
        console.log("Name is " + element.Name + " with the age " + element.Age + " with sex " + element.Sex + "With language know");
        
    })
}



// ****************Class**********************

class students{
    private _fname:string
    private _lname:string

    constructor(fname:string,lname:string){
        this._fname = fname; // this keyword is used to access member within a class.
        this._lname = lname;
        
    }

    GetFullName():string
    {
        return this._fname + " " + this._lname;
    }
}

let s= new students("Deep","Ramani");
console.log(s.GetFullName());


//*********************Module Loader*******************

// There are different types of module loders available

//1.CommonJs
// 2.SystemJS
// 3.AMD
// 4.UMD
// 5.ES2015

//most commonly used webapplication module
// 1.RequireJS
// 2.Browserfy
// 3.Webpack