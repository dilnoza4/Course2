function flattenArray(arr) {
    return arr.flat(Infinity);
}
console.log(flattenArray([1, [5, [3, [4]], 7]]));
