const book = [0.5, 4, 0.5]
const book_qty = 10
const shelf = Array.from({ length: book_qty }, () => [...book])
console.log(shelf)

function sumCmInBookShelf(arr, start, end) {
  let sum = 0

  for (let i = start[0]; i <= end[0]; i++) {
    for (
      let j = i === start[0] ? start[1] : 0;
      j < (i === end[0] ? end[1] + 1 : arr[i].length);
      j++
    ) {
      sum += arr[i][j]
    }
  }

  return sum
}

const result = sumCmInBookShelf(shelf, [0, 1], [4, 1])
const answer = `It traveled for ${result}cm in total.`
console.log(`Start: ${shelf[0][1]}, end: ${shelf[4][1]}`)
console.log(answer)
