// S.O.L.I.D. Principles
// 3 - L: Liskov Substitution Principle
// A Class that is a sub-class of another class, must be able to substitute the class with the same functionality.
// This means that when we use inheritance to create a sub class, and the sub class has the same method,
// the sub class must be able to use the method in the same way without breaking the program.

class Robot {
  constructor(name) {
    this.name = name
  }

  makeCoffee() {
    return `Your Coffee is ready`
  }

  greet() {
    return `Hello, I am ${this.name}`
  }
}

class SmallRobot extends Robot {
  constructor(name) {
    super(name) // Call the constructor of the superclass
  }

  // SmallRobot inherits makeCoffee and greet methods from Robot
}

// Function that expects a Robot instance
function serveRobot(robot) {
  console.log(robot.greet())
  console.log(robot.makeCoffee())
}

// Create instances of Robot and SmallRobot
const bigRobot = new Robot('Big Bob')
const smallRobot = new SmallRobot('Tiny Tim')

// Both instances can be used interchangeably
serveRobot(bigRobot) // Should work correctly
serveRobot(smallRobot) // Should also work correctly
