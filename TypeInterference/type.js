"use strict";
// ! type interference :Feature
//  ? 1>number
// ?let a:number
// Cannot redeclare block-scoped variable 'a'.
// Variable.ts(3, 5): 'a' was also declared here.
let c = 100;
console.log(c);
c = -988;
console.log(c);
//? 2> string
//let s:string
let s;
// s=100
//? boolean
let d = true;
d = false;
console.log(d);
//? null
//!no type safety
let e = null;
e = 100;
e = "Hiiii";
console.log(e);
//? undefined
let f;
f = 100;
f = "HEllo";
f = true;
console.log(f);
//! function :
function demo(x, y) {
}
demo(10, 20);
