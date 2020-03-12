/* eslint-disable linebreak-style */ /* eslint-disable no-console */

const arrGenerator = () => {
  const num = 55300;
  const genArr = [];
  for (let i = 1; i <= num; i += 1) {
    genArr.push(i);
  }
  return genArr;
};

const arr1 = arrGenerator();

const sumOne = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }
  return total;
};

const test = sumOne(arr1);
console.log(test);
