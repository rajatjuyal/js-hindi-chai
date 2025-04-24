//singleton created using Object.create

const mysum = Symbol("key1")

const jsuser = {
    name:"rajat",
    age:43,
   location:"noida",
   email:"rajat@gmail.com",
   [mysum]: "mykey1"   
}

// console.log(jsuser.age)
// console.log(jsuser["email"])


// console.log(jsuser[mysum])

//object with functions
jsuser.greeting = function(){
    console.log("hello greeting")

}

console.log(jsuser.greeting())

jsuser.greetingtwo = function(){
    console.log(`hello greeting this is from the object of ${this.age}`)

}
console.log(jsuser.greetingtwo())