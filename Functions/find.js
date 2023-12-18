// const myarray = ["hello","cat","dog","lion"]

// function  check(string){
//     return string.length===3;
// }

// console.log(myarray.find(check))


const users=[
    {userId: 1, userName:"John"},
    {userId: 2, userName:"bob"},
    {userId: 3, userName:"harry"},
    {userId: 4, userName:"eden"},
    {userId: 5, userName:"richel"},
]

const ans= users.find((user)=>user.userId===3)
console.log(ans)