//primitive data types are the ones where the data stored is accessed as a copy of the data
// non-primitive ones aka REFERENCE ones are the ones which are accessed as a reference

let number = 111
let number1 = Symbol(111);
// console.log(number===number1)

const bignumber = 123753475347573485347n
console.log(bignumber)
console.log(typeof bignumber)

let ud = undefined
console.log(ud)
console.log(typeof ud)

//non-primitive ones
//arrays
const heroes = ["shaktiman", "nagaraj", "doga"];


//objects
const person = {
    name:"rajat",
    age:42
}

//functions
const myfunction = function(){
    console.log("this is inside my function")
}

// console.log(typeof heroes);
// console.log(typeof myfunction);
// console.log(typeof person);

