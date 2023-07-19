//const person = {
   // name: 'Bob',
    //age: 25
//}

//console.log(person)

//const person2 = person
//person2.age = 26
//person2.isAdult = true
//console.log(person)

const person = {
     name: 'Bob',
     age: 25
 }
 //const person2 = Object.assign({}, person)

 //person2.age = 35

 //console.log(person.age)
 //console.log(person2.age)

 //person2.isAdult = true

 //console.log(person2)

 //const person2 = {... person}
 //person2.name = 'Alice'

 //console.log(person.name)
 //console.log(person2.name)

 const person2 = JSON.parse(JSON.stringify(person))

 person2.name = 'Ktoto'

 console.log(person.name)
 console.log(person2.name)