// function add(a,b){
//     // console.log(a+b)
    
// }

// const sumresult  = add(2,3)
// console.log(sumr esult);

// function isEven(number){
//     if(number %2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isEven(20))

// function isEven(number){
//     return number %2===0
// }
// console.log(isEven(20))

// --------------------------------------
// import prompt from "prompt"; // 

// function firstChar(string){
//     return string[0];
// }


// prompt.get(['username'], function(err, result){
//     let {username} = result;
//     console.log("the First Character is ",firstChar(username));
// })
// ------------------------------------------------------------------
// const {username} = await prompt.get(['username']);
// console.log("the First Character is ",firstChar(username));

function findTarget(array,target){
    for(let i=0; i<=array.length; i++){
        if(array[i]===target){
            return i+1;
        }
    }
    return -1
}

console.log("the Target is in",findTarget([1,2,7,8,5],8),"position")
