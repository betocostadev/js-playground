// ASYNC AWAIT
// Using node-fetch and fs to fetch with node and write to file.
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

const fetch = require('node-fetch')
const fs = require('fs')

const baseUrl= 'https://swapi.co/api/'
// const people = 'people'
// const planets = 'planets'
// const nothing = 'nothing'
const starships = 'starships'

// We declare an async function by writing async before the function declaration.
// Then we use the await keyword. The await pauses the execution of the code to await for the promise.
const getStarships = async() => {
  try {
    const res = await fetch((`${baseUrl}${starships}`))
    const json = await res.json()
    const data = json.results.map(starship =>
  `Starship:
  Name: ${starship.name} | Model: ${starship.model} | Manufacturer: ${starship.manufacturer}`)
      writeDocs('starships.txt', data)
  } catch (error) {
    console.log(error)
    writeDocs('error.txt', error)
  }
}
getStarships()


// Callback functions to write the files
const writeDocs = (fileName, data) => {
  const regex = /,/g // Use to replace the , with \n below.
  const formatted = data.toString().replace(regex,'\n')
  fs.writeFile(fileName, formatted, (err) => {
    if (err) throw err;
    console.log(`The file ${fileName} has been saved!`)
    }
  )
}