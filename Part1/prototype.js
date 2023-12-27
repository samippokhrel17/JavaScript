// function hello(){
//     console.log("hello")

// }

// hello.prototype.abc="abc"
// hello.prototype.xyz="fjsdjsj"
// console.log(hello.prototype)




// const userMethod={
//     about :  function(){
//         return`${this.firstName} is ${this.age}years of old`
// },
//     is18 : function(){
//         return this.age >=  18;
// }
// }
function createUser(firstName,lastName,email,age,address){
    const user = Object.create(userMethod);
    user.firstName =firstName;
    user.lastName =lastName;
    user.email =email;
    user.age =age;
    user.address =address;

    return user;
}
createUser.prototype.about=function(){
    return`${this.firstName} is ${this.age}years of old`
}

createUser.prototype.is18 = function(){
    return this.age >=  18;    

}

const user1 = createUser("samip","pokhrel","sam1@gamil.com",22,"kathmandu")
const user2 = createUser("s","p","s1@gamil.com",2,"kat")
const user3 = createUser("sa","pok","s1@gamil.com",24,"kath")
const user4 = createUser("sam","pokh","am1@gamil.com",20,"mandu")
console.log(user1);
console.log(user1.about())
  