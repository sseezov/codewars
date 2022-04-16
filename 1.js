function findOdd(A) {
  let arr = [...A];
  let res;
  for (i = 0; i < arr.length; i++) {
    if (arr.filter((x) => x === arr[i]).length % 2 != 0) {
      res = arr[i];
    }
  }
  return res;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
// let arr = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];

// let res = arr.filter((x) => x == 2).length % 2;
// console.log(res);
