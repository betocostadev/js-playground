async function first() {
  const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise resolved`)
    }, 1000);
  });
  const result = await firstPromise; // wait until the promise is resolved
  return console.log(result) // Promise resolved
}

first()