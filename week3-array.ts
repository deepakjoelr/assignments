function countOccurrences(data:number[], k:number): number {
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === k) {
      count++;
    }
  }
  return count;
}

const data = [2, 4, 5, 2, 1, 2];
const k = 2;

console.log(`Number of occurrences of ${k}:`, countOccurrences(data, k));
