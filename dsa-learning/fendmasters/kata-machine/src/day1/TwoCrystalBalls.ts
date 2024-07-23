export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;

    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            // Reached our first true statement
            break;
        }
    }

    i -= jumpAmount;

    for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            // Found the second true - return the index of it
            return i;
        }
    }

    return -1;
}
