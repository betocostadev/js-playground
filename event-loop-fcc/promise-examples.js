/* let internetConnection = true;

const checkConnection = (resolve, reject) => {
  if (internetConnection) {
      resolve('Ok, resolved!');
  } else {
      reject('Not ok, rejected!');
  }
}

const myPromise = new Promise(checkConnection);
console.log(myPromise); */ // Promise { 'Ok, resolved!'}

// const checkConnection = (resolve, reject) => { };
// const myPromise = new Promise(checkConnection);