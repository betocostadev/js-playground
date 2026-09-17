// Proxy is a JS object with customizable basic operations. They are a kind of object, but they can behave like they have setters and getters,
// so you can use a listener and add logic into this object properties.
// Like me: { name: 'Beto', age: 40 }
// Without a proxy you can use me.age = -10
// With a proxy we can listen to changes into the "age" prop and add logic to it.
// We could for example throw an error like "Age must be positive"
console.log('====== JS - Proxies =======')
console.log('Accessing properties like with usual objects:')
const address = {
  address: 'Street of something, 55',
  country: 'Portugal',
  city: 'Porto',
}

const proxyAddress = new Proxy(address, {
  // Get trap
  get(target, prop) {
    return target[prop]
  },
})

console.log('\nNot proxied address object\n')
console.log(address)

console.log('\nAcessing the proxied address properties\n')
console.log(proxyAddress.country)
console.log(proxyAddress.city)

// Adding logic to it
let person = {
  name: 'Something',
  age: 0,
  lastName: 'Costa',
}

person = new Proxy(person, {
  // Get trap - read
  get(target, prop) {
    if (prop === 'lastName') {
      throw new Error('Access denied.')
    }
    return target[prop]
  },

  // Set trap - write
  set(target, prop, value) {
    if (prop === 'name' && typeof value !== 'string') {
      throw new Error('Name must be string')
    } else if (prop === 'age') {
      if (isNaN(value)) throw new Error('Age must be a number')
      if (!isNaN(value) && value < 0) throw new Error('Age must be above 0')
    }
    target[prop] = value
    return target[prop]
  },
})

console.log('\n==== Defensive programming =====\n')
console.log('Protecting properties access - last name\n')

console.log('Original person object\n')
console.log(person)
// console.log(person.lastName) //! Error
console.log(`
Person name: ${person.name}
`)

console.log('Set trap to avoid setting name to number or other type that is not a string\n')
console.log(person)
// person.name = 1234 //! Error
person.name = 'Bob'
// person.age = 'Twelve' //! Error
// person.age = -5 //! Error
person.age = 40

console.log('Modified person: ')
console.log(person)

// Auto fallbacks - Default values
