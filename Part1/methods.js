// methods
// funcions insider object is called methods
function person1(){
   console.log(`person name is ${this.firstName} and age is ${this.age}`)
  // console.log(`person name is ${person.firstName} and age is ${person.age}`)
}
const person={
    firstName: "har",
    age : 8,
    about:person1
    }
    const person2={
      firstName: "samm",
      age : 22,
      about:person1
      }
    const person3={
      firstName: "jojo",
      age : 32,
      about:person1
      }
   
 
// console.log(`person name is ${person.firstName} and age is ${person.age}`)
// console.log(`person name is ${this.firstName} and age is ${this.age}`)
person.about();
person2.about();
person3.about();

