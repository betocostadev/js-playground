const btnExamplePromise2 = document.querySelector('#example-promise2');
const promiseParagraphsContainer = document.querySelector('.container__promise-paragraphs');

const par1Content = 'Paragraph 1 added!';
const par2Content = 'Paragraph 2 added!';
const par3Content = 'Paragraph 3 added!';

// This is our promise function. As long as there is an image URL when the function is called
// the function will add the image to the page.
const insertParagraph1 = (content) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (content) {
        const par1 = document.createElement("p");
        par1.textContent = content;
        promiseParagraphsContainer.appendChild(par1)
        resolve(par1Content);
      } else {
        reject('No content provided for paragraph 1');
      }
    }, 750);
  })
}

const insertParagraph2 = (content) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (content) {
        const par2 = document.createElement("p");
        par2.textContent = content;
        promiseParagraphsContainer.appendChild(par2)
        resolve('Paragraph 2 added');
      } else {
        reject('No content provided for paragraph 2');
      }
    }, 750);
  })
}

const insertParagraph3 = (content) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (content) {
        const par3 = document.createElement("p");
        par3.textContent = content;
        promiseParagraphsContainer.appendChild(par3)
        resolve('Paragraph 3 added');
      } else {
        reject('No content provided for paragraph 3');
      }
    }, 750);
  })
}




// the function below will call for our promises
const addParagraphs = () => {
  return Promise.all([
    insertParagraph1(par1Content),
    insertParagraph2(par2Content),
    insertParagraph3(par3Content)
  ])
  .catch((error) => {
    console.log(error);
  })
};

// Using the button to call for the promises
btnExamplePromise2.addEventListener('click', addParagraphs);