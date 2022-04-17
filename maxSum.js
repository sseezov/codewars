function maxSum(arr, range) {
  let result = [];
  let currMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    result[i] = (result[i - 1] || 0) + arr[i];
  }

  for (let i = 0; i < range.length; i++) {
    const [start, end] = range[i];
    const sum = result[end] - (result[start - 1] || 0);
    if (sum > currMax) {
      currMax = sum;
    }
  }

  return currMax;
}

console.log(
  maxSum(
    [1, -2, 3, 4, -5, -4, 3, 2, 1],
    [
      [1, 3],
      [0, 4],
      [6, 8],
    ]
  ),
  6
);
console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3]]), 5);
console.log(
  maxSum(
    [1, -2, 3, 4, -5, -4, 3, 2, 1],
    [
      [1, 4],
      [2, 5],
    ]
  ),
  0
);
