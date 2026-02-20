function countOccurrences(data, k) {
    // Initialize count
    var count = 0;
    // Loop through the array
    for (var i = 0; i < data.length; i++) {
        if (data[i] === k) {
            count++;
        }
    }
    // Return the count
    return count;
}
// Example usage
var data = [2, 4, 5, 2, 1, 2];
var k = 2;
console.log("Number of occurrences of ".concat(k, ":"), countOccurrences(data, k));
