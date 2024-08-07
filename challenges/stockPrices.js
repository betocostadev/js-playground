// Write a function that receives two inputs in Javascript.
// One array with strings (companies - string), another is an array with 2 dimensions that represents
// the stock prices for each of the companies in the first array.

// Example:
// Input:
// ["AMZN", "GOOG", "EQIX"]
// [[ 12.81, 11.09, 12.11], [ 13.81, 11.09, 11.11], [ 0.81, 2.09, 12.11]]

// The output should be the name of the companies of the highest average stocks.
// In this case, ["AMZN", "GOOG"]

// The function should return an array with the names of the companies with the highest average stock prices.

// The function should should receive two parameters:
// stockPrices(companies, prices)

const stockPrices = (companies, prices) => {
  let highestAvg = -Infinity
  let highestAverageCompanies = []

  for (let i = 0; i < companies.length; i++) {
    const sum = prices[i].reduce((acc, price) => acc + price, 0)
    const avg = sum / prices[i].length

    if (avg > highestAvg) {
      highestAvg = avg
      highestAverageCompanies = [companies[i]]
    } else if (avg === highestAvg) {
      highestAverageCompanies.push(companies[i])
    }
  }

  return highestAverageCompanies
}

const companies = ['MSFT', 'AMZN', 'APPL', 'GOOG', 'EQIX']
const stocks = [
  [14.0, 12.02, 13.15],
  [12.81, 11.09, 12.11],
  [13.95, 12.35, 13.45],
  [13.81, 11.09, 14.11],
  [1.81, 2.09, 12.11],
]
console.log(stockPrices(companies, stocks))
