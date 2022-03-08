// Filter, like map, returns a new array instead of modifying the original array.
// MDN FILTER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

console.log(`====== Array Filter: ======`)
const animals = [
  { id: 'mammals', species: 'dog', name: 'Meg' },
  { id: 'mammals', species: 'dog', name: 'Brocolis' },
  { id: 'mammals', species: 'cat', name: 'Tuna' },
  { id: 'mammals', species: 'dog', name: 'Dingo' },
  { id: 'mammals', species: 'cat', name: 'Pipo' },
  { id: 'mammals', species: 'fish', name: 'Cuco' },
  { id: 'mammals', species: 'dog', name: 'Maya' }
 ]

const theDogs = animals.filter(animal => animal.species === 'dog')
console.log('The dogs are:', theDogs)

const theCats = animals.filter(animal => animal.species === 'cat')
console.log('The cats are:', theCats)

console.log(`
====== Array Map: ======
`)

// Map will also return a new array.
// MDN MAP: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const persons = [
  { name: 'Tito', age: 10 },
  { name: 'Tulio', age: 10 },
  { name: 'Mauro', age: 19 },
  { name: 'Joana', age: 43 },
  { name: 'Beto', age: 33 },
  { name: 'Laura', age: 15 },
  { name: 'Carol', age: 27 },
]

const nameAndAge = persons.map(person => `${person.name} is ${person.age} years old`)
console.log('Names and ages: ', nameAndAge)

// Mixing both
console.log(`
====== Array map and filter chained: ======
`)

const onlyAbove18 = persons
  .filter(person => person.age > 18)
  .map(person => `${person.name} is ${person.age} years old. Can have a license.`)

console.log(`Above 18 years old: `, onlyAbove18)