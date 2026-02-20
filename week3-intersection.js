function intersection(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        var value = arr1[i];
        if (arr2.includes(value) && !result.includes(value)) {
            result.push(value);
        }
    }
    return result;
}
console.log("Intersection:", intersection([1, 2, 3, 4], [3, 4, 5, 6]));
console.log("Intersection:", intersection([1, 2], [3, 4]));
console.log("Intersection:", intersection([1, 2, 3], [1, 2, 3]));
console.log("Intersection:", intersection([2, 2, 3, 4], [2, 4, 4]));
