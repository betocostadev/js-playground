const btnExamplePromise3 = document.querySelector('#example-promise3');
const promiseParagraphsContainer2 = document.querySelector('.container__promise-paragraphs2');

const par1Content = 'Paragraph 1 added!';
const par2Content = 'Paragraph 2 added!';
const par3Content = 'Paragraph 3 added!';

// This is our promise function. As long as there is an image URL when the function is called
// the function will add the image to the page.
const addParagraphs = (content) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (content) {
        let promisePar = document.createElement("p");
        promisePar.textContent = content;
        // promiseParagraphsContainer.appendChild(promisePar)
        resolve(promisePar);
      } else {
        reject('No content provided for paragraph');
      }
    }, 750);
  })
}

const insertParagraphs = (par) => {
  promiseParagraphsContainer.appendChild(par)
}
// the function below will call for our promises
// const anotheraddParagraphs = () => {
//   return Promise.all([
//     insertParagraph1(par1Content),
//     insertParagraph2(par2Content),
//     insertParagraph3(par3Content)
//   ])
//   .catch((error) => {
//     console.log(error);
//   })
// };

const promiseParagraph = () => {
  promiseParagraph(par1Content)
}
// Using the button to call for the promises
btnExamplePromise2.addEventListener('click', promiseParagraph);