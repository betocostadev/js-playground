/* eslint-disable no-plusplus */
/* eslint-disable no-console */
// secrect codelist = [[apple, apple], [banana, anything, banana]]
// Winner would be: orange, apple, apple, banana, orange, banana, apple, apple, orange, orange, banana, apple, banana, banana

function getWinner(codeList, shoppingCart) {
  // Write your code here
  console.log(codeList)
  console.log(shoppingCart)
  const fixedCode = codeList.map((code) => (code.includes(' ') ? code.split(' ').join(', ') : code))
  const matches = []
  for (let i = 0; i < shoppingCart.length; i++) {
    const match = fixedCode.find((f) => f.toLowerCase().includes(shoppingCart[i].toLowerCase()))
    if (match) matches.push(match)
  }

  return matches.length ? 1 : 0
}

const codeList = [
  ['apple', 'apple'],
  ['banana', 'anything', 'banana'],
]
const shoppingCart = [
  'orange',
  'apple',
  'apple',
  'banana',
  'orange',
  'banana',
  'apple',
  'apple',
  'orange',
  'orange',
  'banana',
  'apple',
  'banana',
  'banana',
]

getWinner(codeList, shoppingCart)
