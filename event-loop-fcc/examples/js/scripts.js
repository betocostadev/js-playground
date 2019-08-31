// Button Event Listener example
// Gets the button element
const btnExampleEvent1 = document.querySelector('#example-event1');

// The change function
const changeButtonText = () => {
  btnExampleEvent1.textContent = 'Event handled, you clicked me!'
};

// Adding the event listener to the button and telling it what to do when the event is triggered.
btnExampleEvent1.addEventListener('click', changeButtonText);


// Callback box animation example
const boxAnimatedContainer = document.querySelector('.container__example-callbackanimation');
const boxAnimated = document.querySelector('.box-animated');

// The called back function to move the box
const movingBoxStep = () => {
  boxAnimated.style.transform = `translate(160px, 0px)`
  // A function to reset the animation
  setTimeout(() => {
    boxAnimated.style.opacity = 0.2;
    boxAnimated.style.transform = `translate(5px, 0px)`;
  }, 3000);
}

// Sets the opacity of the box to 1 and after at least 1 second asks for the callback
const boxShowAndMove = (opacity, callback) => {
  boxAnimated.style.opacity = opacity;
  setTimeout(() => {
    callback()
  }, 1000);
}

// Asks for boxShowAndMove to start the animation
const startBoxExample = () => {
  // movingBoxStep1 is the callback function we are sending
  boxShowAndMove(1, movingBoxStep);
}

boxAnimatedContainer.addEventListener('click', startBoxExample);

