export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    console.log("FLOR: ", Math.floor(4.5));

    do {
        const mid = Math.floor(low + (high - low) / 2);
        const val = haystack[mid];
        console.log("val is now: ", val);

        if (val === needle) {
            return true;
        } else if (val > needle) {
            high = mid;
        } else {
            // Drop the midpoint
            low = mid + 1;
        }
    } while (low < high);

    return false;
}

/*
Example of 4 runs:
[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120] - Needle 50

First:
low = 0
high = 12
mid = 0 + (0 + 12) / 2 = 6
val = haystack[6] (70)
val is bigger than needle

Second:
low = 0
high = 6
mid = 3
val = haystack[3] (40)
val is smaller than needle

Third:
low = 4
high = 6
mid = 5
val = haystack[5] (60)
val is bigger than needle

Fourth:
low = 4
high = 5
mid = 4
val = haystack[4] (50)
val is needle!

**/
