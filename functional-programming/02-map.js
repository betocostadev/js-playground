/* Function Programming
02 - Map
Recommended by the Full Stack Open 2019
MPJ | Fun Fun Function Video:
https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2
*/

console.log(`=== Functional Programming in JavaScript ===`)
console.log(`Part 2 - Higher Order Functions: MAP`)
console.log(`Map, unlike filter, doesn't only filter values. It perform actions and return new values`)

const families = [
  { name: 'Arya', house: 'Stark', age: 16 },
  { name: 'Sansa', house: 'Stark', age: 21 },
  { name: 'Jon', house: 'Stark', age: 30 },
  { name: 'Tywin', house: 'Lannister', age: 58 },
  { name: 'Tyrion', house: 'Lannister', age: 40 },
  { name: 'Jaime', house: 'Lannister', age: 44 },
  { name: 'Daenerys', house: 'Targaryen', age: 28 }
]

// returning an array of strings
const fullNames = families.map(person => `${person.name} ${person.house}, age: ${person.age}`)
console.log(fullNames)

const shortLastNames = families.map(person => person.house.slice(0,3))
console.log(shortLastNames)