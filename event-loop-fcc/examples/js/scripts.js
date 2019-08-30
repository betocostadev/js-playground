// Gets the button element
const btnExampleEvent1 = document.querySelector('#example-event1');

// The change function
const changeButtonText = () => {
  btnExampleEvent1.textContent = 'Event handled, you clicked me!'
}

// Adding the event listener to the button and telling it what to do when the event is triggered.
btnExampleEvent1.addEventListener('click', changeButtonText)