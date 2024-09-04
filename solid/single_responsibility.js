// S.O.L.I.D. Principles
// 1 - S: Single Responsibility Principle

// BAD IMPLEMENTATION
class CarPedals {
  constructor(type) {
    this.type = type
  }

  // Should not be responsible for many things
  usePedal(action) {
    if (action === 'gas') {
      return 'Speeding'
    } else {
      return 'Braking'
    }
  }
}

// BETTER IMPLEMENTATION
class ImprovedPedals {
  constructor(type) {
    this.type = type
  }

  useBrakePedal() {
    return 'Pressed brake pedal, braking...'
  }

  useGasPedal() {
    return 'Pressed gas pedal, speeding...'
  }
}

const pedals = new ImprovedPedals('racer')

console.log(pedals.useBrakePedal())
console.log(pedals.useGasPedal())
