//! Intersection
//? Used to Combine Multiple Types
//?Syntax : type newType = type1 & type2
// type A = string & number :
// let value : A = "Hello"

type Person ={
    name : string;
    age :number;
}
type Employee = {
    eid :number |string ;
    designation :String;
}
type C = Person & Employee
let emp1 : C ={
    name :"Smith",
    age : 26,
    eid : "EMP101",
    designation : "Test Engineer"
}

 // //? eg :
 //type A = string |number;
 //type B = string |boolean;
 //type D =A & B

 //let val:D ="Hello"
 //Val = true
 // //? conflit Object Property :
 //type A = {
 //id:number;
//}

//type B = {
 //id:string;
//}
//type C = A & B

//let std1 : C = {
//id :"101"
//}