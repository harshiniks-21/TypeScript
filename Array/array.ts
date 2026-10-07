//! Array:Syntax 1
//let /const variableName : datatype[] = [val1,val2,val3]
//! Syntax 2 :
//let/const variable : Array<datatype> = [val1,val2,val3,..]
//let a = [10,20,30]
//let b = [10,20,"hello",true]
//! number :
//let a : number[] = [10,20,30]
//a.push(40)
//let b: Array<number> = [10,20,30]
//! string :
let b : string[] = ["apple","banana","kiwi"]
//! boolean :
let c : boolean[] = [true,false,true,false]
//! nested array : 2D array
let d : number[][] =[[10,20],[30],[40,50,60]]
//! 3D array
let e : number[][][] = [[[10,20,30]],[[40]]]
//! empty
let num1 : [] = [] //tuple
let num :number[] = [] //array
//! type interference :
let f =[10,20] //? let f:number[]
let g =[10,"hello",true] //? let g :(string|number|boolean)[]
let h =[[10]] //? let h : number[][]
//! Access array ele
console.log(b[0])
console.log(b[1])
console.log(b[2])
//! all built in method are valid
//! length 
//! array of objects :
let student :{
    name : string;
    age : number;
    address :{
        pin:number;
        city:string;
    }
}[]=[
    {name:"John",age :25,address:{pin:3456,city:"bglr"}},
    {name:"Smith",age :30,address:{pin:6789,city:"Hyd"}}
]
//?
console.log(student[0]);
console.log(student[1]);
// console.log(student[2]);
// console.log(student[3]);