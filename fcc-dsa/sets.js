/* eslint-disable no-console */
// SETS
// The set data structure is like an array, but there are no duplicate items,
// and the values are not in any particular order
// Typical use: Check for the presence of an item

console.log('SETS\n')

class CustomSet {
  constructor() {
    const collection = []

    // Checks if the element is in the set
    this.has = function has(element) {
      return collection.indexOf(element) !== -1
    }

    // Returns the values of the set
    this.values = function values() {
      return collection
    }

    // Returns the size of the set
    this.size = function size() {
      return collection.length
    }

    // Adds an element to the set
    this.add = function add(element) {
      if (!this.has(element)) {
        collection.push(element)
        return true
      }
      return false
    }

    // Removes an element from the set
    this.remove = function remove(element) {
      if (this.has(element)) {
        collection.splice(collection.indexOf(element), 1)
        return true
      }
      return false
    }

    // Merge two sets into one
    this.union = function union(otherSet) {
      const unionSet = new CustomSet()
      const firstSet = this.values()
      const secondSet = otherSet.values()
      firstSet.forEach((element) => {
        unionSet.add(element)
      })
      secondSet.forEach((element) => {
        unionSet.add(element)
      })
      return unionSet
    }

    // Return the intersection of two sets
    this.intersection = function intersection(otherSet) {
      const intersectionSet = new CustomSet()
      const firstSet = this.values()
      firstSet.forEach((element) => {
        if (otherSet.has(element)) intersectionSet.add(element)
      })
      return intersectionSet
    }

    // Returns the difference of two sets
    this.difference = function difference(otherSet) {
      const differenceSet = new CustomSet()
      const firstSet = this.values()
      firstSet.forEach((element) => {
        if (!otherSet.has(element)) differenceSet.add(element)
      })
      return differenceSet
    }

    // Test if the set is a subset of a different set
    this.subset = function subset(otherSet) {
      const firstSet = this.values()
      return firstSet.every((element) => otherSet.has(element))
    }
  }
}

console.log('Checking the CustomSet created')

const set1 = new CustomSet()
const set2 = new CustomSet()
set1.add('Brazil')
set1.add('Denmark')
set1.add('Brazil')
set1.add('Portugal')
set1.add('Canada')
set1.add('Ireland')
console.log('Set1 size: ', set1.size())
console.log('Set1 values: ', set1.values())

console.log('\n')

set2.add('United States')
set2.add('Canada')
set2.add('United Kindom')
set2.add('Ireland')
console.log('Set2 size: ', set2.size())
console.log('Set2 values: ', set2.values())

// Testing union of set one and two
const setUnion = set1.union(set2)
console.log('Values of the Set1 and Set2 Union: ', setUnion.values())
// Testing the intersection of set one and two
const setIntersection = set1.intersection(set2)
console.log('Values of the Set1 and Set2 Intersection: ', setIntersection.values())

// Testing the difference of the two sets
const setDifference = set1.difference(set2)
console.log('Values of the Set1 Difference to Set2: ', setDifference.values())

const setDifference2 = set2.difference(set1)
console.log('Values of the Set2 Difference to Set1: ', setDifference2.values())

// Testing the subset
const subset1To2 = set1.subset(set2)
const subset2To1 = set2.subset(set1)
console.log('Subset test of Set1 against Set2: ', subset1To2)
console.log('Subset test of Set2 against Set1: ', subset2To1)
