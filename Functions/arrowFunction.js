//arrow Functions

// const happy = ()=>{
//     console.log("happy birthday");
// }
// happy()

// const sumofthree = (a,b,c)=>{
//     return a+b+c
// }
// let x = sumofthree(5,10,15)
// console.log(x)

// console.log("the sum of three number is",x)

// const first = function(anystring){
//     return anystring[0]

// }
// console.log(first("Bibek Regmi Hancy"));  


// const isEven= (number)=>{
//     return number %2===0
// }
// console.log(isEven(20))


// const first = (anystring)=>anystring[0]

   
//     console.log(first("Bibek "));  

const findTarget=(array,target)=>{
    for(let i=0; i<=array.length; i++){
        if(array[i]===target){
            return i+1;
        }
    }
    return -1
}

console.log("the Target is in",findTarget([1,2,7,8,5],8),"position")



