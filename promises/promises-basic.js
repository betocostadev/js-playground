/* PROMISES
MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 1 resolved`)
  }, 1000)
})

const mySwitch = false
const promiseTwo = new Promise((resolve, reject) => {
  if (mySwitch) {
    resolve(`Promise 2 resolved, switch is on`)
  } else {
    reject(`Promise 2 rejected, switch is off`)
  }
})

promiseOne
  .then(data => data + `. And added the first then...`)
  .then(dataTwo => dataTwo + `And another then!`)
  .then(dataThree => console.log(dataThree))

promiseTwo
  .then(value => console.log(value))
  .catch(error => console.log(error))
