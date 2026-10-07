"use strict";
//? Union Types:
//? accepts Specific datatypes only
//? syntax:let varname :type1 | type2 = value
let value;
value = "hello";
value = 102;
//value = true-->it will give u an Error
let status1 = "successful";
status1 = 200;
status1 = "successful";
status1 = true;
//Union in Type Interference.
let arr = [10, "Hello"]; //! let  ar:(string | number)[]
//! heterogeneous data in arrays
let arr1 = [10, "Hi"];
//!Union In Objects :
let Employee = {
    eid: 101,
    namee: "John",
    skills: ["html", "css", "JS"],
    isonline: "Yes",
    display() {
        console.log("My name is ", this.namee);
    }
};
console.log(Employee.eid);
console.log(Employee.namee);
console.log(Employee.skills);
console.log(Employee.isonline);
Employee.display();
