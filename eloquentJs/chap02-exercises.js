/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */

// Eloquent JavaScript Chapter 2 - Exercises

console.log(`Chapter 02 Exercises`);
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
console.log(`Looping a triangle`);
createTriangle(8);

console.log(`
=== FizzBuzz ===
`);

const fizzBuzz = (maxNumber) => {
  for (let i = 1; i < maxNumber; i++) {
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

fizzBuzz(100);
