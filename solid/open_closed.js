// S.O.L.I.D. Principles
// 2 - O: Open-Closed Principle
// A Class, component, entity should be OPEN for EXTENSION and CLOSED for MODIFICATION.

// BAD IMPLEMENTATION
const HandlePayment = (type) => {
  function charge(type) {
    return `paid with ${type}`
  }

  function checkIsValid(type) {
    // handleApiCall(type)
    return true
  }

  function process(type) {
    if (checkIsValid(type)) {
      return charge(type)
    }
    return false
  }

  return process(type)
}

// WHY IS IT BAD?
const HandlePaymentTwo = (type) => {
  function charge(type) {
    return `paid with ${type}`
  }

  // Bad implementation because this function had to be changed.
  // It can grow to a point difficult to maintain.
  function checkIsValid(type) {
    if (type === 'card') {
      // handleApiCall('card')
      return true
    } else {
      // handleOtherApiCall('other')
      return false
    }
  }

  function process(type) {
    if (checkIsValid(type)) {
      return charge(type)
    }
    return false
  }

  return process(type)
}

// BETTER IMPLEMENTATION
// Another design using more abstraction and letting it open to extension
const HandlePaymentImproved = (method) => {
  function chargeCard() {
    return `Product bought successfully`
  }

  function verifyCard() {
    // handleCardApiCall()
    return chargeCard()
  }

  function checkIsValid(method) {
    switch (method) {
      case 'card':
        return verifyCard()
      default:
        return false
    }
  }

  function process(paymentMethod) {
    return checkIsValid(paymentMethod)
  }

  return process(method)
}

const HandlePaymentImprovedTwo = (method) => {
  function chargeCard() {
    return `Product bought successfully`
  }

  function verifyCard() {
    // handleCardApiCall()
    return chargeCard()
  }

  // EXTENSION
  function chargeVoucher() {
    return `Product bought with your voucher`
  }

  function verifyVoucher() {
    return chargeVoucher()
  }

  // Changed, but in this case, its only a switch.
  // If it was a class implementation, the class could have it's own payment method.
  function checkIsValid(method) {
    switch (method) {
      case 'card':
        return verifyCard()
      case 'voucher':
        return verifyVoucher()
      default:
        return false
    }
  }

  function process(paymentMethod) {
    return checkIsValid(paymentMethod)
  }

  return process(method)
}

console.log(HandlePayment('card'))
console.log(HandlePaymentImproved('card'))
console.log(HandlePaymentImprovedTwo('voucher'))
