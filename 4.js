function arraysSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1.sort()[i] !== arr2.sort()[i]) {
        return false;
      }
    }
    return true;
  }
}

const arr1 = [1, 2, 2, 3, 4],
  arr2 = [2, 1, 2, 4, 3],
  arr3 = [1, 2, 3, 4],
  arr4 = [1, 2, 3, "4"];
console.log(arraysSimilar(arr3, arr4));
