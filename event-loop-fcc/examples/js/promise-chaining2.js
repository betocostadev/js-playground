const btnExamplePromise2 = document.querySelector('#example-promise2');
const promiseParagraphsContainer = document.querySelector('.container__promise-paragraphs');

const par1Content = 'Paragraph 1 added!';
const par2Content = 'Paragraph 2 added!';
const par3Content = 'Paragraph 3 added!';
// Our promise function. It creates and element with the content provided when calling the function.
const addParagraphs = (content) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (content) {
        let promisePar = document.createElement("p");
        promisePar.textContent = content;
        // promiseParagraphsContainer.appendChild(promisePar)
        resolve(promisePar);
      } else {
        let errorMessage = 'No content provided for paragraph';
        reject(new Error(errorMessage));
      }
    }, 750);
  })
}

// Will add the paragraph to the page, it will use the element generated from the promise above
const insertParagraphs = (par) => {
  promiseParagraphsContainer.appendChild(par)
}

// Here we will return all the promises after they have been resolved.
const promiseParagraph = () => {
  return Promise.all([
    addParagraphs(par1Content),
    addParagraphs(par2Content),
    addParagraphs(par3Content),
  ])
  .then((parArr) => {
    parArr.forEach( par => insertParagraphs(par))
  })
  .catch((error) => {
    console.log(error)
  })
}
// Using the button to call for the promises
btnExamplePromise2.addEventListener('click', promiseParagraph);