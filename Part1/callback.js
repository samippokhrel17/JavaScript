function myfun2(name){
    console.log("insider function 2")
    console.log(`you name is ${name}`)
}

function myfun(callback){
    console.log("welcome to myfunction")
    callback("samip");
}


myfun(myfun2)