let myarray = [1,2,3,4,5,6]
// console.log(myarray)

// console.log(myarray[1])

const myheroes = new Array(1,2,3,4,5)
myheroes.push(1)
// console.log(myheroes)

myheroes.pop()
// console.log(myheroes)
 myheroes.unshift(7)
//  console.log(myheroes)
 myheroes.shift()
//  console.log(myheroes)

//  console.log(myheroes.includes(5))
//  console.log(myheroes.indexOf(3))

// console.log(myheroes.join()) //converts the array to a string

const arraycheck = [0,1,2,3,4,5,6,7]
const mynew1 = arraycheck.slice(1,3)
console.log(arraycheck)
console.log(mynew1)

const mynew2 = arraycheck.splice(1,3)
console.log(arraycheck)
console.log(mynew2)

