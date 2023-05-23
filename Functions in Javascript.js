console.log("this is my fucntion");

function greet(name, greetText='Greetingform'){
    let name1="This is a name";
    console.log(greetText+" "+ name);
    console.log(name+  "is a good boy");
}
// Functions are building block 

function sum(a,b,c){
    let d= a+b+c;
    return d
    console.log("this is funtion")   ///it is never printed after  return
}
function value(a,b,c){
    if (a>b){
        console.log(a)
    }
    // return d
    
}
let name0 = "Faizan";
let name1 = "Faizan";
let name2 = "Faizan";
let name3 = "Faizan";
let name4 = "Faizan";
let  greetText1="Good Morning";
greet(name0,greetText1);
greet(name1,greetText1);
greet(name2,greetText1);
greet(name3,greetText1);
let returnval=sum(1,2,3)
console.log(returnval);
// THis is repeated process 
// console.log(name0 + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// console.log(name4 + " is a good boy");

let big = value(19,5,5)
console.log(big)