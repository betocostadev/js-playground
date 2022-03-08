// Based on the examples of the Full Stack Open 2019 - Helsinki University Course
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log(`Hi, I am ${this.name} and I'm ${this.age} years old.`)
  }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()