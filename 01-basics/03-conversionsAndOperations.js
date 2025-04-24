let score = "33"
// console.log(typeof score)
// console.log(typeof (score))

let valueinumber = Number(score)
// console.log(valueinumber)
// console.log(typeof valueinumber)

let score1 = "33abc" //if we try to convert this alphanumeric thing in a number using the Number class, then it will give a NaN which is also a type of number class
//and for these reasons we need to check if the input is NOT a NaN and best to use Typescript for these issues.
let valueinumber1 = Number(score1)
// console.log(valueinumber1)
// console.log(typeof valueinumber1)

let score2 = null 
let valueinumber2 = Number(score2)
console.log(valueinumber2)
console.log(typeof valueinumber2)


let score3 = undefined // gives NaN just like a alphanumeric input
let valueinumber3 = Number(score3)
// console.log(valueinumber3)
// console.log(typeof valueinumber3)


let score4 = true// gives 1 as a number - correct and expected
let valueinumber4 = Number(score4)
// console.log(valueinumber4)
// console.log(typeof valueinumber4)


/*
Number
33 => 33
33abc  => NaN
null => 0 as number

Boolean
"" => false
"someting" => true
1 => true and 0 => false
*/