/* Function Programming
04 - Advanced Reduce
Recommended by the Full Stack Open 2019
MPJ | Fun Fun Function Video:
Advanced Reduce:
https://www.youtube.com/watch?v=1DMolJ2FrNY

MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/

console.log(`=== Functional Programming in JavaScript ===`)
console.log(`Part 4 - Advanced Reduce
`)

// Using Node fs
const fs = require('fs')

const dataFile = fs.readFileSync('data.txt', 'utf-8')
console.log(dataFile)

const splitData = dataFile
  .trim()
  .split('\n')
  .map(line => line.split('  '))
  .reduce((customers, line) => {
    // Create the object to return
    // console.log('Line: ', line)
    // will create an empty array: 'mark johanson': []
    // The below line needs to follow this format, otherwise, it will replace the array.
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})

// console.log(`
// Split data: `, splitData)
console.log(`
Split data: `, JSON.stringify(splitData, null, 2))

setTimeout(() => {
  fs.writeFileSync('./newData.txt', JSON.stringify(splitData, null, 2))
}, 500)

