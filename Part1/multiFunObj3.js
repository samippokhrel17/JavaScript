const obj1={
    key1: "value1",
    key2: "value2"
}

const obj2=Object.create(obj1) //object.create helps to create empty object like obj2={}
obj2.key3="hello"




console.log(obj2.__proto__)