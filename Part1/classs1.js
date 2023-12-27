class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(){
        return`${this.name} is eating`;
    }
    
    isSuperCute(){
        return this.age <=1;
    }

    iscute(){
        return true;
    }
    
}


// class Dog{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;

//     }

//     eat(){
//         return`${this.name} is eating`;
//     }
    
//     isSuperCute(){
//         return this.age <=1;
//     }

//     iscute(){
//         return true;
//     }
// }

class Dog extends animal{
    constructor(name,age, speed ){
        super(name,age)
        this.speed=speed;
    }
     
    run(){
        return`${this.name}is running at ${this.speed}`
    }


    }


const animal2= new Dog("huskey",5,45)
console.log(animal2.run())



 

// const animal1= new animal("tiger",2)
