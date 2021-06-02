const person = {
    givenName: 'Dumisani',
    givenSurname: 'Ndhlovu',
    residence: 'Ukraine',
    occupation: 'React Developer'
}

person.nickname = 'Midu'
 const message = `Hi ${person.givenName}, also known as ${person.nickname}. I hear you reside in ${person.residence}! Cool!!`

 console.log('message',message);


//  This sections allows us to loop thru the object using for in 
 for (let prop in person) {
     console.log('for in', `${prop}: ${person[prop]}`);
 }


//  Array of objects

const pet = [
    {
        name: 'Woffie',
        age: 3,
        color: 'brown'
    },
    {
        name: 'Rexxy',
        age: 4,
        color: 'green'
    }
]

console.log(pet)

