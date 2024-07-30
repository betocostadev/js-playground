export default function quick_sort(arr: number[]): void {
    if (arr.length === 0 || arr.length === 1) {
        return;
    }

    const p = arr[Math.floor(arr.length / 2)];
    const low = [];
    const high = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= p) {
            low.push(arr[i]);
        } else {
            high.push(arr[i]);
        }
    }
    console.log(p);
    console.log(low);
    console.log(high);

    const left = quick_sort(low);
    const right = quick_sort(high);
    console.log(arr);
    console.log(left);
    console.log(right);
}

const thing = [
    26, 21, 1, 3, 6, 5, 20, 22, 14, 15, 19, 10, 8, 9, 7, 18, 21, 12, 13,
];

quick_sort(thing);
