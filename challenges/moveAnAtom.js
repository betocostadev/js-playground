// Move an atom on a grid using predefined actions.

// Rules

// You have discovered ancient alchemical processes for transmuting matter.
// You can add or remove protons and neutrons from an atom.

// Your atom is placed in the game area.
// The x-axis represents the number of protons and the y-axis the number of neutrons.
// You need to list the actions to be taken so that the atom reaches
// the expected number of protons and neutrons.

// The following 3 predefined actions are available:
// PROTON: adds a proton to the atom. In the game area, this is equivalent to moving it
// one square to the right.

// NEUTRON: adds a neutron, moves the atom down one square.

// ALPHA: removes two protons and two neutrons by alpha decay, moves the atom two squares
// diagonally left and up.

// You must return a list of strings corresponding to the actions to be performed.
// For example, if you return a list containing the words "ALPHA". PROTON", "PROTON". PROTON".
// the atom will lose two protons and two neutrons, then regain 3 protons.
// In the end, it will move two squares up and one square to the right.
// The order of the actions is not important. There's no need to minimize the number of actions.
// You are allowed to move your atom out of the grid, even through the upper and left borders.

// Implement the function solve(protonsStart, neutronsStart, protonsTarget, neutronsTarget)
// This function must return a list of strings: the successive actions to be
// performed to go from the supplied atom to the target atom.

// The function takes 4 input parameters:
// protonsStart and neutronsStart represent the number of protons and neutrons in the initial atom.
// protonsTarget and neutrons Target represent the number of protons and neutrons in the desired atom.

// Constraints:
// 0 <= protonstars, protonsTarget < 30
// 0 <= neutronsStart, neutrosTarget < 20

const solve = (protonsStart, neutronsStart, protonsTarget, neutronsTarget) => {
  const actions = []

  let deltaProtons = protonsTarget - protonsStart
  let deltaNeutrons = neutronsTarget - neutronsStart

  // console.log('Actions', actions)
  // console.log('deltaProtons', deltaProtons)
  // console.log('deltaNeutrons', deltaNeutrons)

  // If deltaProtons and deltaNeutrons are both negative, use ALPHA decays first
  while (deltaProtons < 0 && deltaNeutrons < 0) {
    actions.push('ALPHA')
    deltaProtons += 2
    deltaNeutrons += 2
  }

  // Add protons if needed
  while (deltaProtons > 0) {
    actions.push('PROTON')
    deltaProtons -= 1
  }

  // Add neutrons if needed
  while (deltaNeutrons > 0) {
    actions.push('NEUTRON')
    deltaNeutrons -= 1
  }

  // Use ALPHA decays if remaining deltaProtons and deltaNeutrons are both negative again
  while (deltaProtons < 0 && deltaNeutrons < 0) {
    actions.push('ALPHA')
    deltaProtons += 2
    deltaNeutrons += 2
  }

  // If deltaProtons or deltaNeutrons are still negative, continue using ALPHA decays
  while (deltaProtons < 0) {
    actions.push('ALPHA')
    deltaProtons += 2
    deltaNeutrons += 2
  }

  while (deltaNeutrons < 0) {
    actions.push('ALPHA')
    deltaProtons += 2
    deltaNeutrons += 2
  }

  return actions
}

// Example
const protonsStart = 2
const neutronsStart = 3
const protonsTarget = 4
const neutronsTarget = 1

const actions = solve(protonsStart, neutronsStart, protonsTarget, neutronsTarget)
console.log(actions)
