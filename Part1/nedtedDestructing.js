const users =[
    {userId:1, firstName:'ram', gender:'male'},
    {userId:2, firstName:'hari', gender:'male'},
    {userId:3, firstName:'gopal', gender:'male'},
    
]

const[{firstName},,{gender}]=users

console.log(firstName)