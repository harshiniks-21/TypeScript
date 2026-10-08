//! Special Datatypes :
//! 1) void
// function and objects
function display(user:string):void {
    console.log("welcome ",user);
}
console.log(display("John"));

//Ex:2 =>
let student : {
    nameee : string ;
    greet() : void;
} = {
    nameee : "John",
    greet()
    {
        console.log("Welcome ",this.nameee)
    }

}
student.greet()


//! 2> any Datatype
//? it can store anytype of value
//? there is no type safety
//? no compile time error
//? only run time error that is why it is not recommended
// let a = null
// function demo(a){

// }
// let u;
//? let variable : datatype =value;
//let a: any = 10
//! 1> not aware of the value received --> any
//! 2> operation /utilise
//console.log(a.toUpperCase());
//TypeError : a.toUpperCase is not a function


//! 3> unknown Datatype :
//? It can store any type of value
//? there is typeSafety
 let a :unknown = "successfull"
// console.log(a.toUpperCase());

//? force type Checking
console.log(typeof a);
if(typeof a == "string")
{
    console.log(a.toUpperCase());

}
else
{
    console.log("this is not a string");
}
