// //set is also iterable
// // stores Data
// // 
// const item=['item1','item2']
// const number = new Set();
// number.add(1)
// number.add(2)
// number.add(item)
// console.log(number)

const myArray = [1,2,4,4,5,6,5,6]
const newele = new Set(myArray)
let length = 0
for(let element of newele){
    length++
}
console.log(length)

