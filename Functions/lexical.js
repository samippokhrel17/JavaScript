const myapp =()=>{
    const myvar="value1"
    function myfun(){
        // const myvar="value59"
        console.log("inider myfun",myvar)
    }



    const myfun2=function(){}
    const myfun3=()=>{}
    console.log(myvar)
    myfun()
}
myapp()