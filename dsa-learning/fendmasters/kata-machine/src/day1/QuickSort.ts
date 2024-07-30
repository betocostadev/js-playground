function qs(arr: number[], low: number, high: number): void {
    if (low >= high) {
        return;
    }

    const pivotIdx = partition(arr, low, high);

    qs(arr, low, pivotIdx - 1);
    qs(arr, pivotIdx + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
    // const pivot = arr[Math.floor(arr.length / 2)];
    const pivot = arr[high];

    let idx = low - 1;

    for (let i = low; i < high; i++) {
        // for (let i = low; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    arr[high] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    // const result = qs(arr, 0, arr.length - 1);
    // console.log("Solved Arr: ", arr);
    qs(arr, 0, arr.length - 1);
}

const thing = [
    26, 21, 1, 3, 6, 5, 20, 22, 14, 15, 19, 10, 8, 9, 7, 18, 21, 12, 13,
];

const testArr = [9, 3, 7, 4, 69, 420, 42];

console.log(quick_sort(testArr));
console.log(quick_sort(thing));

// quick_sort(thing);
