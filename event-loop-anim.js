/* eslint-disable no-console */
console.log('Hello World!');
console.log(Math.max(20, 40) + 60);

const listNames = (names) => {
  names.forEach((name) => {
    console.log(name);
  });
};

const areas = ['São', 'Paulo', 'Brazil'];

listNames(areas);

setTimeout(() => {
  console.log('Log after 1000ms');
}, 1000);

setTimeout(() => {
  console.log('Log after 0ms');
}, 0);

console.log('last?');
