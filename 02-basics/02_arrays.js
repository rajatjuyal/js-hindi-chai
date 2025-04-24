const rajatarray = ["rajat", "sharma", "noida"]
const ishaarray = ["isha","panwar", "doon"]

const combinedarray = [...rajatarray,...ishaarray]
// console.log(combinedarray)

const arrayinarray = [1,2,3,[4,5],[6,7,[8,9],10]]
const realanotherarray = arrayinarray.flat(Infinity)
// console.log(realanotherarray)

// console.log(Array.isArray("rajat"))
// console.log(Array.from("Rajat"))

// console.log(Array.from({name:"rajat"}))

console.log(Array.of(rajatarray,ishaarray))
