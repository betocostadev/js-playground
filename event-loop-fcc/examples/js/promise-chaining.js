const btnExamplePromise1 = document.querySelector('#example-promise1');
const imageArrayContainer1 = document.querySelector('.image-array1');

// This is our promise function. As long as there is an image URL when the function is called
// the function will add the image to the page.
const insertImage = (source) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (source) {
        const imgEl = document.createElement("img");
        imgEl.src = source;
        imageArrayContainer1.appendChild(imgEl)
        resolve(source);  // We are returning the source, this value will be used in our chaining.
      } else {
        reject(console.log('Image URL not provided!'));
      }
    }, 750);
  })
}

// the function below will call for our promises
const addImages = () => {
  // Note that our promises are inside the addImages() function just for
  // make us able to call the function using the button.
  insertImage('https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg')
  .then((img2) => {
    return insertImage(img2);
  })
  .then((img3) => {
    return insertImage(img3);
  })
  .catch((error) => {
    // We will talk about catching errors in the Handling errors section
    console.log(error);
  })
};

// Using the button to call for the promises
btnExamplePromise1.addEventListener('click', addImages);