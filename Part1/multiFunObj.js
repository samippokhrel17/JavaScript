//1. function (that function create object)
// 2.0 add key value pair
// 3  object lai return garcha

const userMethod={
    about :  function(){
        return`${this.firstName} is ${this.age}years of old`
},
    is18 : function(){
        return this.age >=  18;
}
}
function createUser(firstName,lastName,email,age,address){
    const user = Object.create(userMethod);
    user.firstName =firstName;
    user.lastName =lastName;
    user.email =email;
    user.age =age;
    user.address =address;
    // user.about = userMethod.about
    // user.is18 = userMethod.is18

    return user;
}

const user1 = createUser("samip","pokhrel","sam1@gamil.com",22,"kathmandu")
const user2 = createUser("s","p","s1@gamil.com",2,"kat")
const user3 = createUser("sa","pok","s1@gamil.com",24,"kath")
const user4 = createUser("sam","pokh","am1@gamil.com",20,"mandu")
console.log(user1);s
// console.log(user2);
// console.log(user3);
// console.log(user1.is18())
console.log(user1.about())
// console.log(user2.about())
// console.log(user3.about())