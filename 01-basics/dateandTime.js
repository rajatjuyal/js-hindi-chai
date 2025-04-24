const mydate = new Date()
// console.log(mydate)

const mydate1 = new Date()
// console.log(mydate1.toString())

// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())

const myCreatedDate = new Date(2023,0,1)
// console.log(myCreatedDate.toDateString())


let mytimestamp = Date.now()
// console.log(mytimestamp)

console.log(myCreatedDate.getDate().toString())

let newdate = new Date()
newdate.toLocaleString('default',{
    weekday: "long"
})


