//! functions:
//function functionname(para:datatype):ReturnType{}
//! named Function
function display(user:string):string{
    return `welcome  ${user}`
}
console.log(display("Smith"))

function display1(user:number):string{
    return `welcome  ${user}`
}
console.log(display1(20))

function display2(user:boolean):string{
    return `Is it ${user}`
}
console.log(display2(true))
//!Anonymous Function
let addition = function (a:number,b:number):number{
    return a+b
}
console.log(addition(5,5))

let addition1 = function (a:string,b:string):string{
    return a+b
}
console.log(addition1("Hi","Bye"))

let addition2 = function (a:string,b:string):string{
    return a+b
}
console.log(addition2("Hi","Bye"))





//! CallBack Function
//Function funname(Para:datatype):Returntype{}
//? syntax :function:()=>return type
function runTask(callback:()=>void):void{
    console.log(`task started`);
    callback()
    console.log(`task completed`)

}
runTask(function(){
        console.log(`Executing a task`);
})

function displayy(name:string,age?:number)
{
    if(age===undefined){
    console.log(`${name}`)
    }
    else
    {
        console.log(`${name}`)
        console.log(`${age}`)
    }

}

displayy("SMith",20)
//! Arrow function
//? 1> multiple Parameters
//let variable = (para:datatype,para:datatype):ReturnType => {}
let addd=(a:number,b:number):number=>{
    return a+b
}
console.log(addd(2,3))

//? 2> single Parameters :paranthesis() are mandatory
let subbb=(a:number):number=>{
    return a
}
console.log(subbb(5000))
//? 3>zero Parameter
let add3=():number=>{
    return 50
}
console.log(add3())
//? Implicit Return
//let variable ={p1:datatype) : return type}
let add4 =():number=>10
console.log(add4())


//! default parameters:
//para:datatype ="default value"
function greet(user:string = "guest") : string{
    return `welcome ${user}`
}
console.log(greet());
console.log(greet("Smith"));
