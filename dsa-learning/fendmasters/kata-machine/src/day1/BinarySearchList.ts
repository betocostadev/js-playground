export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const mid = Math.floor(low + (high - low) / 2);
        const val = haystack[mid];

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
