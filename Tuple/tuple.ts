//! TUPLE
//? It is a special type in Arrays
//? Element DataType & Position Matters
//? Length will not Change
//? syntax : let variable  : [datatype1,datatype2]=[v1,v2,v3]
//! Empty Tuple :
let arr :[] =[]
//! tuple
let arr1:[string,number]=["Hello",100]
console.log(arr1[0])
console.log(arr1[1])
 //!ex:2
 //let student :[string,number]=["Harshini",25]
//   let student :[string,number]=[25,"Harshini"]
  //Type 'number' is not assignable to type 'string'.
  //! ex: 3
  //let student : [string,number]=["John",95,age]
  //Type '[string, number, any]' is not assignable to type '[string, number]'.
  //Source has 3 element(s) but target allows only 2.
//? function
function login(name:string,age:number)
{
    console.log(name,age)
}
login("Harshini",25)
//login(30,"Harshini")
//Argument of type 'number' is not assignable to parameter of type 'string'.
function loginn(a:number,b:string)
{
    return (a+b)
}
console.log(loginn(2,"Hi"))
//! ex:
let student : [string|number,boolean] =[10,true]
let employee :[string|number,string,number]
employee =["EMP101","John",500000]

//! type Alias Eg:
type EmpDetails =[string|number,string,number]
let emp1 : EmpDetails =["EMP102","Smith",40000]
