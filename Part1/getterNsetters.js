// getter and Setters

class person{
    constructor(fname,lname,age){
        this.fname= fname;
        this.lname=lname;
        this.age=age;
    }
    get fullName(){
        return `${this.fname} ${this.lname}`
    }
    // setName(fname,lname){
    //     this.fname=fname;
    //     this.lname=lname;
    // }
    set fullName(fullName){
        const[fname,lname]=fullName.split(" ");
        this.fname=fname;
        this.lname=lname;


    }

}

const person1= new person("samip","pokhre",23)
// console.log(person1.fname);
// console.log(person1.fullName);
// console.log(person1.fname());
// person1.set("sam","hoho")
// console.log(person1.fname);
// console.log(person1.lname);
// person1.setName("sam","hoho")
// console.log(person1.fname);
// console.log(person1.lname);
person1.fullName="bibek regmi";
console.log(person1)


