/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/*
STDIN
10 → names [] size n = 10
steve → names = ['steve', 'stevens', 'danny',
'steves', 'dan', 'john', 'johnny', 'joe', 'alex', ‘alexander']

input (names, steve) → output 2 (stevens, steves)
*/

const matchPrefixes = (names, query) => {
  if (!query.length) return 0

  const result = []
  const splitName = [...query]
  let namesIndex = 0
  while (namesIndex < names.length) {
    const nameToMatch = [...names[namesIndex]]
    let nameToMatchIndex = 0
    const matchLetters = []
    while (nameToMatchIndex < nameToMatch.length) {
      if (splitName[nameToMatchIndex] === nameToMatch[nameToMatchIndex]) {
        matchLetters.push(nameToMatch[nameToMatchIndex])
      }
      nameToMatchIndex++
    }
    if (names[namesIndex].length > query.length && names[namesIndex].startsWith(query)) {
      result.push(names[namesIndex])
    }
    // console.log(...names[namesIndex])
    namesIndex++
  }
  return result.length
}

console.log(
  matchPrefixes(
    ['steve', 'stevens', 'danny', 'steves', 'dan', 'john', 'johnny', 'joe', 'alex', 'alexander'],
    'steve'
  )
)

console.log(matchPrefixes(['racecar', 'dragon', 'tricar'], 'car'))

const simpleTry = (names, query) => {
  if (!query.length || !names.length) return 0

  const results = []

  for (let idx = 0; idx < names.length; idx++) {
    if (names[idx] !== query && names[idx].length > query.length && names[idx].startsWith(query)) {
      results.push(names[idx])
    }
  }
  return results.length
}

console.log('Tests using a simple function: ')
console.log(
  simpleTry(
    ['steve', 'stevens', 'danny', 'steves', 'dan', 'john', 'johnny', 'joe', 'alex', 'alexander'],
    'steve'
  )
)

console.log(simpleTry(['racecar', 'dragon', 'tricar'], 'car'))

console.log(
  simpleTry(
    ['baiacu', 'bar', 'barbearia', 'barbeiro', 'rabare', 'barbante', 'baleia', 'balde'],
    'bar'
  )
)
