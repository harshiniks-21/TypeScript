"use strict";
//! Object
//Empty object
// let student : {
// } ={
// }
//? eg :
//! Missing Properties
//!Property 'isPresent' is missing in type '{ name: string; id: number; }' but required in type '{ name: string; id: number; isPresent: boolean; }'.
//!object.ts(14, 5): 'isPresent' is declared here.
// let std:{
//     name:string;
//     id:number;
//     isPresent:boolean
// }={
//     name :"John",
//     id : 100,
//     // isPresent:false
// }
// console.log(std)
//! readOnly Properties
//? readonly Property : DataType
let stu = {
    name: "John",
    id: 101
};
//!  tyr to update :
//Cannot assign to 'id' because it is a read-only property.
//stu.id =102
//! Nested Object
let person = {
    name: "Harshini",
    id: 102,
    address: {
        city: "Tiptur",
        pin: 572201
    }
};
//!Optional Properties:
//?Property? : datatype
let books = {
    name: "PaperGrid",
    price: 90,
    author: "Myself",
    greet() {
        console.log("Written by Myself");
    }
};
console.log(books);
//! Void in function
function add(a, b) {
    console.log(a + b);
    //return a+b
}
console.log(add(10, 20));
