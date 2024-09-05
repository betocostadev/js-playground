// S.O.L.I.D. Principles
// 4 - I: Interface Segregation Principle
// no client should be forced to depend on methods it does not use.
// In other words, it's better to have multiple small, specific interfaces rather than one large,
// general-purpose interface.

// NOT USING THE PRINCIPLE:

// A large interface with many methods
class Printer {
  printDocument() {
    throw new Error('Method not implemented.')
  }

  scanDocument() {
    throw new Error('Method not implemented.')
  }
}

// A simple printer that only prints documents
class SimplePrinter extends Printer {
  printDocument() {
    console.log('Printing document...')
  }

  // Unused methods
  scanDocument() {
    throw new Error('Method not implemented.')
  }
}

// A multifunction printer that prints, scans, and faxes documents
class MultiFunctionPrinter extends Printer {
  printDocument() {
    console.log('Printing document...')
  }

  scanDocument() {
    console.log('Scanning document...')
  }
}

const simplePrinter = new SimplePrinter()
simplePrinter.printDocument()
// simplePrinter.scanDocument(); // This would throw an error

const multiFunctionPrinter = new MultiFunctionPrinter()
multiFunctionPrinter.printDocument()
multiFunctionPrinter.scanDocument()

// USING THE INTERFACE SEGREGATION PRINCIPLE:
console.log('Same classes but using Interface segregation principle')

// Smaller, specific interfaces
class ISPrinter {
  printDocument() {
    throw new Error('Method not implemented.')
  }
}

class ISScanner {
  scanDocument() {
    throw new Error('Method not implemented.')
  }
}

// A simple printer that only prints documents
class ISSimplePrinter extends ISPrinter {
  printDocument() {
    console.log('Printing document...')
  }
}

// A multifunction printer that prints, and scans documents.
class ISMultiFunctionDevice extends ISPrinter {
  printDocument() {
    console.log('Printing document...')
  }
}

class ISMultiFunctionDevice extends ISScanner {
  scanDocument() {
    console.log('Scanning document...')
  }
}

const isSimplePrinter = new ISSimplePrinter()
isSimplePrinter.printDocument()

const isMultiFunctionDevice = new ISMultiFunctionDevice()
isMultiFunctionDevice.printDocument()
isMultiFunctionDevice.scanDocument()
