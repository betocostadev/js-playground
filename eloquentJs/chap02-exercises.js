/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */

// Eloquent JavaScript Chapter 2 - Exercises

console.log(`=== Chapter 02 Exercises ===
`);
/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### */

const createTriangle = (lines) => {
  let triAnglePart = '#';
  for (let index = 0; index < lines; index++) {
    console.log(triAnglePart);
    triAnglePart += '#';
  }
};
console.log(`====== Looping a triangle ======`);
createTriangle(8);

/* Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters
to separate lines. At each position of the grid there is either a space or a "#" character.
The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and
change the program so that it works for any size, outputting a grid of the given width and height.
*/
console.log(`
====== Chessboard ======
`);

const chessBoard = (grid) => {
  let even = ''
  let odd = '';
  for (let i = 0; i < grid / 2; i++) {
    even += '# '
    odd += ' #'
  }
  for (let j = 0; j < grid / 2; j++) {
    if (j % 2 === 0) {
      console.log(even)
    } else if (j % 2 !== 0) {
      console.log(odd)
    }
  }
}

chessBoard(8);

console.log(`
====== FizzBuzz ======
`);

const fizzBuzz = (maxNumber) => {
  for (let i = 1; i <= maxNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(30);
