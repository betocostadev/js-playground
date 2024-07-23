// We already have a sorted list of numbers in haystack - This is very important for Binary Search.
// In Binary Search, we need to find the middle element of the haystack.
// If the middle element is equal to the needle, return true.
// If needle is not in the haystack, return false.
// We need to find the index of needle in the haystack.
// If needle is in the haystack, return true.
function bsList(haystack, needle) {
    var divisions = 0; // Just for logging purposes
    var low = 0;
    var high = haystack.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        var half = haystack[mid];
        if (half === needle) {
            console.log("divisions: ".concat(divisions));
            return true;
        }
        else if (half > needle) {
            divisions++;
            high = mid - 1;
        }
        else {
            divisions++;
            low = mid + 1;
        }
    }
    console.log("divisions: ".concat(divisions));
    return false;
}
console.log(bsList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3)); // true
console.log(bsList([1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11, 12, 13, 14, 15, 16], 9)); // false
var thousandArr = [];
for (var i = 0; i < 1000; i++) {
    thousandArr.push(i);
}
console.log(bsList(thousandArr, 750)); // true
