// PROMISES
// Using node-fetch and fs to fetch with node and write to file.
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// Using Node-Fetch to handle fetch outside the browser
const fetch = require('node-fetch')
const fs = require('fs')

const baseUrl= 'https://swapi.co/api/'
const people = 'people'
const planets = 'planets'
const starships = 'starships'
const nothing = 'nothing'

const getPeople = () => {
  fetch(`${baseUrl}${people}`)
    .then(response => response.json())
    .then(data => {
      const names = data.results.map(person => `Character: ${person.name}`)
      writeDocs('names.txt', names)
      // console.log(names)
    }).catch(error => console.log(error))
}
getPeople()

const getPlanets = () => {
  fetch(`${baseUrl}${planets}`)
    .then(response => response.json())
    .then(data => {
      const planets = data.results.map(planet => `Planet: ${planet.name} | Diameter: ${planet.diameter}`)
      writeDocs('planets.txt', planets)
    }).catch(error => console.log(error))
}
getPlanets()

/* const getBug = () => {
  fetch(`${baseUrl}${nothing}`)
    .then(response => response.json())
    .then(data => {
      const nothing = data.results.map(planet => `Planet: ${planet.name} | Diameter: ${planet.diameter}`)
      writeDocs('nothing.txt', nothing)
    }).catch(error => console.log(error))
}
getBug() */

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
