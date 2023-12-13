//filter method

const numbers = [3,6,2,5,1]

// const filtermethod=(number)=>{
//     return number%2===0;
// }

const print=numbers.filter((number)=>{
    
    return number%2===0;
});
console.log(print);