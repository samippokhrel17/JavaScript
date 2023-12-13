//reduce

// const numbers=[1,2,3,4,5]

// function addall(number){
//     var total = 0;
//     for(let i=0;i<number.length;i++){
//         total = total + number[i];
//     }
//     console.log(total)
    
    
// }


// addall(numbers)

// numbers.reduce((number)=>{
//     return   

// })





const numbers=[1,2,3,4,5,10]

const sum = numbers.reduce((accumulator,currentValue)=>{
    const samip = accumulator
    console.log(samip)
    return accumulator+currentValue;
      
});
console.log(sum)

// const usercart=[
//     {productId: 1, productName: "mobil", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "TV", price: 15000},
// ]

// const totalAmount= usercart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.price 



// },0)
// console.log(totalAmount)