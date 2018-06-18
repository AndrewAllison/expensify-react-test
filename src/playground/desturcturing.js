//
// Object Destructuring

// const person = {
//   name: 'Andrew',
//   age: 36,
//   location: {
//     city: 'Durham',
//     temp: 92
//   }
// };
//
// const {age, name: firstName = 'N/A'} = person;
//
// console.log(`Name: ${firstName} - Age: ${age}`);
//
// const {city, temp: temprature} = person.location;
// if (city && temprature) {
//   console.log(`It's ${temprature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };
//
// const {name: publishersName = 'Self-Published'} = book.publisher;
// console.log(publishersName);

//
// Array Destructuring

const address = ['1299 Juniper Street', 'Philedelphia', 'Pennsylvania', '19124'];
const [,city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`);

const items = ['Coffee (Hot)', '$2.00', '$2.50', '$3.00'];
const [description, , price, ] = items;
console.log(`A medium ${description} ${price}`);