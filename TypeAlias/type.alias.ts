// arrays:
 type n = number[]
 let arr1 : n=[10,20,30]
 console.log(arr1)

 //! functions:
 //? type typename = ...
 //parameters and return type :
  type Age =number
  type Name= String
  type Str = String
  function display(age:Age,name:Name):Str{
    return `${name} and ${age}`
  }
  console.log(display(10,"John"))
  //Eg:
  //type variable =(para:datatype)=>ReturnType
  type Operation =(a:number,b:number) => number;

  let add:Operation=(a,b)=>
  {
    return a+b;
  }
  console.log(add(10,20))

//? Array of Objects
