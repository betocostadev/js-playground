/* JavaScript Dom insertion and performance tests

The functions below will:
Generate and array of 1000 paragraphs and then call for a function to append paragraphs
on the page with each array number.
domTestOne = Low performance function (too many reflows)
domTestTwo = moderate performance (less reflows - but a not needed new div in the DOM)
domTestThree = high performance (uses document fragment - performance similar to 2, but no new div)

*/

// Dom global variables:
const testContainer = document.querySelector('.test-container');
const btnContainer = document.querySelector('.buttons');
const testBtn1 = document.querySelectorAll('.test-btn')[0];
const testBtn2 = document.querySelectorAll('.test-btn')[1];
const testBtn3 = document.querySelectorAll('.test-btn')[2];
const resetBtn = document.querySelector('.reset-btn');
const displayPerf1 = document.querySelectorAll('.display-perf')[0];
const displayPerf2 = document.querySelectorAll('.display-perf')[1];
const displayPerf3 = document.querySelectorAll('.display-perf')[2];

// Reset button function:
const reset = () => {
  // Remove the paragraph's div if it was created:
  if (document.querySelector('.placeholder')) {
    const toRemove = document.querySelector('.placeholder');
    // It uses the element to traverse for its parent and the parent removes the child.
    toRemove.parentElement.removeChild(toRemove);
    // If there is no 'to-remove' div, remove the paragraphs:
  } else if (document.querySelectorAll('.paragraph')) {
    const paragraphs = document.querySelectorAll('.paragraph');
    paragraphs.forEach((par) => {
      par.parentElement.removeChild(par);
    });
  }
};


const testOne = (arr) => {
  // Reset the paragraphs if there is any:
  reset();
  // Generate the paragraphs and start the performance test:
  const startTime = performance.now();
  // Paragraphs added one by one!
  for (let i = 0; i < arr.length; i += 1) {
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = `${arr[i]}`;
    testContainer.appendChild(paragraph);
  }
  // End the performance test and display the time:
  const endTime = performance.now();
  displayPerf1.textContent = `Test 1: ${endTime - startTime} milliseconds.`;
};

const testTwo = (arr) => {
  // Reset the paragraphs if there is any:
  reset();
  // This time, create another div, to append only the div to the dom, instead of one p, one by one:
  const parContainer = document.createElement('div');
  parContainer.classList.add('placeholder');
  // Generate the paragraphs and start the performance test:
  const startTime = performance.now();
  for (let i = 0; i < arr.length; i += 1) {
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = `${arr[i]}`;
    parContainer.appendChild(paragraph);
  }
  // Paragraphs added all at the same time inside their new div
  testContainer.appendChild(parContainer);
  // End the performance test and display the time:
  const endTime = performance.now();
  displayPerf2.textContent = `Test 2: ${endTime - startTime} milliseconds.`;
};

const testThree = (arr) => {
  // Reset the paragraphs if there is any:
  reset();
  // No need to create another div this time, we will use a document fragment.
  const fragment = document.createDocumentFragment();
  // Generate the paragraphs and start the performance test:
  const startTime = performance.now();
  for (let i = 0; i < arr.length; i += 1) {
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = `${arr[i]}`;
    fragment.appendChild(paragraph);
  }
  testContainer.appendChild(fragment);
  // End the performance test and display the time:
  const endTime = performance.now();
  displayPerf3.textContent = `Test 3: ${endTime - startTime} milliseconds.`;
};


// Function to generate the num of paragraphs:
const arrayGenerator = (funcCall) => {
  const num = 3000;
  const genArr = [];
  for (let i = 1; i <= num; i += 1) {
    genArr.push(i);
  }
  // return genArr;
  if (funcCall === 'testOne') {
    testOne(genArr);
  } else if (funcCall === 'testTwo') {
    testTwo(genArr);
  } else if (funcCall === 'testThree') {
    testThree(genArr);
  }
};

// Function to call the tests:
// To avoid the event listener to run the functions on load.
btnContainer.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target === testBtn1) {
    arrayGenerator('testOne');
  } else if (e.target === testBtn2) {
    arrayGenerator('testTwo');
  } else if (e.target === testBtn3) {
    arrayGenerator('testThree');
  } else if (e.target === resetBtn) {
    reset();
  }
});
