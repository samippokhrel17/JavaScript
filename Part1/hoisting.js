//hoisting
"use strict"
hello()


function hi(){
    console.log("cccc")
}
hi()

function hello(){
    console.log("In this hoisting,the function is call before the start of function  ")
}