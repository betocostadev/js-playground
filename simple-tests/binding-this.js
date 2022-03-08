const arto = {
  name: 'Arto Hellas',
  greet: function() {
    console.log('hello, my name is', this.name)
  },
}

// Not binding... this will be the Timeout object
setTimeout(arto.greet, 1000);
// Binding THIS
setTimeout(arto.greet.bind(arto), 1000);

// Even using the new syntax we have the same problem.
const artorais = {
  name: 'Artorais',
  greet() {
    console.log('Hello, im using ES6 and I am', this.name)
  }
}

artorais.greet();
setTimeout(artorais.greet, 1000);