//? Union Types:
//? accepts Specific datatypes only
//? syntax:let varname :type1 | type2 = value
let value : string|number ;
value ="hello"
value = 102
//value = true-->it will give u an Error

let status1 : number|string|boolean = "successful"
status1 = 200
status1 ="successful"
status1 = true

//Union in Type Interference.

let arr =[10,"Hello"] //! let  ar:(string | number)[]

//! heterogeneous data in arrays

let arr1 :(string|number)[] =[10,"Hi"]

//!Union In Objects :
let Employee : {
    eid : number|string;
    namee :string;
    skills : string[];
    isonline : boolean | string ;
    display () : void ;
} = {
    eid :101,
    namee : "John",
    skills :["html","css","JS"],
    isonline : "Yes",
    display(){
        console.log("My name is ", this.namee);
    }

}
console.log(Employee.eid);
console.log(Employee.namee);
console.log(Employee.skills);
console.log(Employee.isonline);
Employee.display();

//!functions :
function displayy(a:number|string):number|string{
                return a;
        }
        console.log(displayy(100));
        console.log(displayy("John"));


//? Union Type in type Alias
 
type Std ={
    name : string ;
    id : number
}|number |string|boolean

let std1 : Std = 100
std1 ="John"
std1 + true
std1 = {
    name : "John",
    id : 101
}