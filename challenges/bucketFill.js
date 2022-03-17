/* eslint-disable operator-linebreak */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

/*
 * Bucket Fill
  Digital graphics often make available a "bucket fill tool" that will only paint adjacent cells.

  Example:
  picture = ['aabba', 'aabba', 'aaacb']

  Each string represents a row of the picture and each letter represents a cell collor.
  The diagram below shows the 5 fills needed to repaint the picture. It takes two fills each for
  a and b, and one for c.

  Initial canvas:
  [a, a, b, b, a]
  [a, a, b, b, a]
  [a, a, a, c, b]

  Strokes
  [a1, a1, b2, b2, a3]
  [a1, a1, b2, b2, a3]
  [a1, a1, a1, c4, b5]

  Total strokes = 5.

  Write the functions to output the number of strokes for the pictures.
 */

/*
 * Complete the 'strokesRequired' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY picture as parameter.
 */

function mapStrokes(picture, row, col, cells) {
  const cell = picture[row][col]

  if (picture[row][col] === cell) {
    cells[row][col] = true
    // Traverse in all directions
    // down
    if (
      row + 1 < picture.length &&
      picture[row + 1][col] === cell &&
      cells[row + 1][col] === false
    ) {
      mapStrokes(picture, row + 1, col, cells)
    }
    // left
    if (
      col + 1 < picture[row].length &&
      picture[row][col + 1] === cell &&
      cells[row][col + 1] === false
    ) {
      mapStrokes(picture, row, col + 1, cells)
    }
    // up
    if (row > 0 && picture[row - 1][col] === cell && cells[row - 1][col] === false) {
      mapStrokes(picture, row - 1, col, cells)
    }
    // right
    if (col > 0 && picture[row][col - 1] === cell && cells[row][col - 1] === false) {
      mapStrokes(picture, row, col - 1, cells)
    }
  }
}

function strokesRequired(picture) {
  const cells = []

  // Use a loop with an inner loop to traverse rows and columns
  // Create an inner array for each position
  for (let col = 0; col < picture.length; col++) {
    cells[col] = []
    // Add a false bool to use as empty cells
    for (let row = 0; row < picture[col].length; row++) {
      cells[col][row] = false
    }
  }

  let strokes = 0
  // Check for stroke count using the cells
  for (let col = 0; col < picture.length; col++) {
    for (let row = 0; row < picture[col].length; row++) {
      if (!cells[col][row]) {
        mapStrokes(picture, col, row, cells)
        strokes++
      }
    }
  }
  return strokes
}

console.log('===== BUCKET FILL =====')

console.log(strokesRequired(['aabba', 'aabba', 'aaacb']))
console.log(strokesRequired(['aabca', 'aabca', 'aaacb', 'aaccb', 'abbca']))
