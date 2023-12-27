const userMethod={
    about :  function(){
        return`${this.firstName} is ${this.age}years of old`
},
    is18 : function(){
        return this.age >=  18;
},
    sing : function(){
        return'tummm tummm tanananana';
    }
}
function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName =firstName;
    user.lastName =lastName;
    user.email =email;
    user.age =age;
    user.address =address;
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
    user.sing = userMethod.sing;
    return user;
}
const user1 = createUser("samip","pokhrel","sam1@gamil.com",22,"kathmandu")
const user2 = createUser("s","p","s1@gamil.com",2,"kat")
const user3 = createUser("sa","pok","s1@gamil.com",24,"kath")
const user4 = createUser("sam","pokh","am1@gamil.com",20,"mandu")
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user1.is18())
console.log(user1.about());
console.log(user1.sing());