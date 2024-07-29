const dir = [
    [-1, 0], // left
    [1, 0], // down
    [0, -1], // right
    [0, 1], // up
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // Base case

    // Off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // On a Wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // Found the ending
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    // Seen it before
    if (seen[curr.y][curr.x] === true) {
        return false;
    }

    // 3 Recurse
    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (
            walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)
        ) {
            return true;
        }
    }

    // post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}

[
    -"xxxxxxxxxx*x",
    -"x        x*x",
    -"x        x*x",
    -"x xxxxxxxx*x",
    -"x**********x",
    -"x*xxxxxxxxxx",

    +"xxxxxxxxxx x",
    +"x        x x",
    +"x        x x",
    +"x xxxxxxxx x",
    +"x          x",
    +"x xxxxxxxxxx",
];
