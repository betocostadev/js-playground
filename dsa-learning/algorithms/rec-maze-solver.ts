// Recursion
// Maze Solver

// Maze

// const maze = [
//   "xxxxxxxxxx x",
//   "x        x x",
//   "x        x x",
//   "x xxxxxxxx x",
//   "x          x",
//   "x xxxxxxxxxx",
// ];

// const mazeResult = [
//   { x: 10, y: 0 },
//   { x: 10, y: 1 },
//   { x: 10, y: 2 },
//   { x: 10, y: 3 },
//   { x: 10, y: 4 },
//   { x: 9, y: 4 },
//   { x: 8, y: 4 },
//   { x: 7, y: 4 },
//   { x: 6, y: 4 },
//   { x: 5, y: 4 },
//   { x: 4, y: 4 },
//   { x: 3, y: 4 },
//   { x: 2, y: 4 },
//   { x: 1, y: 4 },
//   { x: 1, y: 5 },
// ];

// 4 directions for each position, O(4s), cross the 4, O(n)

// Create a directions array to help

// Base Case:
// 1 - Off the map
// 2 - It's a Wall
// 3 - Reached goal
// 4 - If it was there before

type Point = {
  x: number
  y: number
}

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean {
  // - Base case
  // Off the map
  // On a Wall
  // Found the ending
  // Seen it before
  // - Recursion
  // pre
  // recurse
  // post
  return false
}
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  return []
}
