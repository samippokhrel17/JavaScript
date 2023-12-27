// map methods

const numbers =[1,4,5,2,6,8]

// const square=function(number){
//     return number*number    //alway use return in map function,using console will give undefine  
// }


// ------------------------------------
// const square=(number)=>{
//     return number*number
// }


// const squarenumber=numbers.map(square)
// console.log(squarenumber)

// -------------------------------------

const users=[
    {fname: "jack", age: 48},
    {fname: "harvey", age: 32},
    {fname: "louis", age: 35},
    {fname: "mikey", age: 28},
]

const going=(user)=>{
    return user.fname;
}

const uu= users.map(going)
console.log(uu)