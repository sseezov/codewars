function arraySum(arr) {
  let result = arr
    .toString()
    .split(",")
    .filter((x) => {
      return Number(x) == x;
    });

  return result
    .map((p) => Number(p))
    .reduce(function (a, b) {
      return a + b;
    });
}

console.log(arraySum([1, 2]), 3);
console.log(arraySum([1, 2, 3]), 6);
console.log(arraySum([1, 2, [1, 2], "bad"]), 6);
console.log(arraySum([1, 2, 3.5]));
console.log(arraySum([1, 2, [1, 2, 3, [5, 1, 0]]]));
