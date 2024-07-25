const a = new ArrayBuffer(6)
console.log(a)

const a8 = new Uint8Array(a)
a8[0] = 45

console.log(a)

a8[2] = 45
console.log(a)

const a16 = new Uint16Array(a)

console.log(a)

a16[2] = 0x4545 // 17733

console.log(a)

a16[2] = 0x45 // 69

console.log(a)

// Tecnically since we can increase the size of an array in Javascript (and this means their indexes are all changed)
// it's not actually an array.
// An array must have a size.
// So const = [] is not actually an array data structure.
// Bad things about an array:
// There is no Deletion, Insertion, and it cannot grow.
