// // call , apply , bind
// function hello(){
//     console.log("hello world")
// }


// hello.call()


// const user1={
//     firstName : "samip",
//     age : 8,
//     about : function(hobby,favsinger){
//         console.log(this.firstName, this.age,hobby,favsinger)
        
//     } 
// }

// const user2={
//     firstName : "mohit",
//     age: 9,
// }

// user1.about.call(user1,"cricket","naryan gopal")
// // user1.about.call(user2)
 

// // call , apply , bind
// function hello(){
//     console.log("hello world")
// }


// hello.call()
// function about(hobby,favsinger){
//     console.log(this.firstName, this.age,hobby,favsinger)
    
// } 

// const user1={
//     firstName : "samip",
//     age : 8,
    
// }

// const user2={
//     firstName : "mohit",
//     age: 9,
// }

// about.call(user1,"cricket","naryan gopal")
// // user1.about.call(user2)
 


//apply
//about.app(user1 )

function about(hobby,favsinger){
    console.log(this.firstName, this.age,hobby,favsinger)
    
} 

const user1={
    firstName : "samip",
    age : 8,
    
}

const user2={
    firstName : "mohit",
    age: 9,
}
//apply
// about.apply(user1,["cricket","naryan gopal"])
// user1.about.call(user2)
 

//bind
const func = about.bind(user2,"guitar","bach")
func()

