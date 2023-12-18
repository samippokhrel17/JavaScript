// const numbers=[2,32,64]


// const ans =numbers.every((number)=>number%2===0);

// console.log(ans)

// function iseven(number){
//     return number%2 ===0;

// }

// const ans = numbers.every(iseven)

const usercart=[
    {proId:1, proName:"mobil", price: 220},
    {proId:2, proName:"laptp", price: 33000},
    {proId:3, proName:"ps", price: 2201200},
    
]

const answer =(array)=>{
    return array.price<30000;
}

console.log(usercart.every(answer))


// const answer =((array)=> array.price<30000)


// console.log(usercart.every(answer))