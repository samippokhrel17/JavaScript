//map 
//stores key value pairs


// const person = {
//     firstName : "samip",
//     age : 21

// }

// console.log(person.firstName)
// console.log(person["firstName"])

// const person  = new Map();
// person.set('firstName','hari')
// person.set('age',21)
// person.set(1,'one')
// // console.log(person)
// // console.log(person.get('age'))
// //console.log(person.keys()) --- same can be done by running loops

// for (let [key,value] of person){
//     console.log(key,value)
// }

const person1 ={
    id:1,
    firstName:"harshit",
}
const person2 ={
    id:2,
    firstName:"hars",
}

const userinfo = new Map();
userinfo.set(person1, {age:8, gender:'male'})
userinfo.set(person2, {age:8, gender:'male'})
console.log(userinfo)
console.log(userinfo.get(person1).age)





// const person = new Map([['firstName','harshit'],])
