/* Reduce method
MDN REDUCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce */

console.log(`====== Reduce: ======
`)
const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sumOfSomeNumbers = someNumbers.reduce((acc, cur) => acc + cur, 0)
console.log(sumOfSomeNumbers)

const incomes = {
  salary: 3000,
  investment: 500,
  sales: 1000
}

const expenses = {
  gym: 70,
  tim: 45,
  card: 150,
  bus: 50
}

const sumAll = (obj) => {
  return Object.values(obj).reduce((acc, cur) => acc + cur, 0)
}

console.log(sumAll(incomes))
console.log(sumAll(expenses))

/* const totalIcomes = Object
  .values(incomes)
  .reduce((acumulador, elementoAtual) => acumulador + elementoAtual, 0)

const totalExpenses = Object
  .values(expenses)
  .reduce((acc, cur) => acc + cur, 0)

console.log(totalIcomes)
console.log(totalExpenses) */