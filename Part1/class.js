class createUser{
constructor(firstName,lastName,email,age,address){
    this.firstName =firstName;
    this.lastName =lastName;
    this.email =email;
    this.age =age;
    this.address =address;
}


about(){
    return `${this.firstName} is ${this.age}years`
}
is18(){
    return this.age>=18
}
sing(){
    return "la la la la la"
}
}


const user1 = new createUser('')


