// static class


class person{
    constructor(fname,lname,age){
        this.fname= fname;
        this.lname=lname;
        this.age=age;
    }

    static classInfo(){
        return "this is person classs";
    }

    get fullName(){
        return `${this.fname} ${this.lname}`
    }
    set fullName(fullName){
        const[fname,lname]=fullName.split(" ");
        this.fname=fname;
        this.lname=lname;
    }

    eat(){
        return`${this.fname} is eating`;
    }
    
    isSuperCute(){
        return this.age <=1;
    }

    iscute(){
        return true;
    }

}

const person11= new person("sm","pok111",22);
// console.log(person11.eat());

console.log(person.classInfo());