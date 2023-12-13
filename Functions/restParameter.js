// const check=(a,b,...c)=>{
//     console.log(`a is ${a}`)
//     console.log(`a is ${b}`)
//     console.log(`a is ${c}`)
//     // console.log(`a is ${d}`)
// }

// check(1,2,3,4,5,6,7)

function addAll(...num){
    let total =0;
    for(let number of num){
        total = total + number; 
    }
    return total
}
console.log(addAll(1,2,3,4,5))





// const sumAll=function(...values){
//     let total = 0;
//     for(let i of values){
//          total = total + values;
       
//     }
//     return total
    
// }

// console.log(sumAll(1,2,3,4,5))