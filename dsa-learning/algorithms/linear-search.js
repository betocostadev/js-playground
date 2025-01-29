// The most basic way of searching
// Not the most performant one O(n)
var linearSearch = function (needle, haystack) {
    for (var i = 0; i < haystack.length; i++) {
        if (needle === haystack[i]) {
            return i;
        }
    }
    return -1;
};
var arr = [0, 2, 4, 12, 98, 75, 83, 3, 92, 99, 77, 33, 11, 22, 44, 534, 93, 13, 10];
console.log(linearSearch(4, arr));
