/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
/* eslint-disable no-console */
const collectedResults = []
const lotteryQtyNumbers = 6

const possibilityGatherer = (result) => {
  collectedResults.push(result)
}

const possibilityGen = (qtyNumbers, maxNumber) => {
  let index = 0
  const possibilities = []
  while (index < qtyNumbers) {
    possibilities.push(Math.floor(Math.random() * maxNumber + 1))
    index += 1
  }
  return possibilityGatherer(possibilities)
}

const generate = (attempts, qtyNumbers, maxNumber) => {
  let index = 0
  while (index < attempts) {
    possibilityGen(qtyNumbers, maxNumber)
    index += 1
  }
  return collectedResults
}

const getResults = (hash) => {
  console.log('hash is: ', hash)
  const finalResult = {}
  for (let index = 0; index < lotteryQtyNumbers; index++) {
    const results = Object.values(hash)
    const max = Math.max(...results)
    const keyToRemove = Object.keys(hash).find((key) => hash[key] === Math.max(...results))
    console.log('key to remove', keyToRemove)
    finalResult[keyToRemove] = max
    delete hash[keyToRemove]
  }
  console.log('Go and Win with: ', finalResult)
  return finalResult
}

const genHash = (results) => {
  const hash = {}
  const collection = results.flatMap((ind) => ind)

  for (i = 0; i < collection.length; i++) {
    if (hash.hasOwnProperty(collection[i])) {
      hash[collection[i]] += 1
    } else {
      hash[collection[i]] = 1
    }
  }

  getResults(hash)
}

const startTime = performance.now()

genHash(generate(1000000, lotteryQtyNumbers, 60))

const endTime = performance.now()

console.log(`Call to Generate the hash took ${endTime - startTime} milliseconds`)
