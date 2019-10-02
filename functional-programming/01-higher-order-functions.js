/* Function Programming
01 - Higher Order Functions
Recommended by the Full Stack Open 2019
MPJ | Fun Fun Function Video:
https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
*/

console.log(`=== Functional Programming in JavaScript ===`)
console.log(`Part 1 - Higher Order Functions`)

// Functions are values, and since they are values, we can pass them to another functions.
// That means we can COMPOSE our code. Compose small functions into bigger functions.
const triple = (num) => num * 3
console.log(triple(3))

// Filter is a higher-order function
const animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Drogon', species: 'dragon' },
  { name: 'Meg', species: 'dog' },
  { name: 'Bruce', species: 'dog' },
  { name: 'Maya', species: 'dog' },
  { name: 'Dumbo', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
]

const sayNameAndSpecies = (arr, spec) => {
  const filtered = arr.filter(animal => animal.species === spec)
  const names = filtered.map(animal => animal.name)
  const species = filtered.map(animal => animal.species)
  if (names.length < 1) {
    return `Found no animal of that specimen`
  } else if (names.length === 1) {
    return `Found ${names} of the ${species[0]} species`
  } else {
    return `Found ${names}. All of them are ${species[0]}s`
  }
}

console.log(sayNameAndSpecies(animals, 'dog'));
console.log(sayNameAndSpecies(animals, 'bear'));
console.log(sayNameAndSpecies(animals, 'dragon'));

// Reject
console.log(`
We can also try the opposite, another Higher-Order Function
`)

const isSpecimen = (specimen) => animals.filter(animal => animal.species === specimen)
const dogs = isSpecimen('dog')
console.log(`All dogs:`, dogs)

const otherSpecies = (specimen) => animals.filter(animal => animal.species !== specimen)
const noDogs = otherSpecies('dog')

console.log(`No dogs:`, noDogs)