function moveZeros(arr) {
  let initialArray = [...arr];
  let zeros = [];
  for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] === 0) {
      initialArray.splice(
        initialArray.indexOf(initialArray[i]),
        initialArray[i] + 1
      );
      zeros.push(0);
    }
  }
  return initialArray.concat(zeros);
}

console.log(
  moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]),
  [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
);
console.log(
  moveZeros([
    "a",
    "b",
    "c",
    "d",
    1,
    1,
    3,
    1,
    9,
    {},
    9,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]),
  [
    "a",
    "b",
    null,
    "c",
    "d",
    1,
    false,
    1,
    3,
    [],
    1,
    9,
    {},
    9,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]
);
