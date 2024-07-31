function qs(arr: number[], low: number, high: number): void {
    if (low >= high) {
        return;
    }

    const pivotIdx = partition(arr, low, high);

    qs(arr, low, pivotIdx - 1);
    qs(arr, pivotIdx + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
    // We will be using the last element as the pivot
    const pivot = arr[high];

    let idx = low - 1;
    for (let i = low; i < high; i++) {
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
    qs(arr, 0, arr.length - 1);
}

const testArr = [9, 3, 7, 4, 69, 420, 42];

console.log(quick_sort(testArr));
