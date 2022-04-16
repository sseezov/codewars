function distinct(a) {
  let arr = [...a];
  let fin = [];

  for (let i = 0; i < a.length; i++) {
    if (fin.indexOf(arr[i]) === -1) {
      fin.push(arr[i]);
    }
  }
  return fin;
}

console.log(distinct([1]), [1]);
console.log(distinct([1, 2]), [1, 2]);
console.log(distinct([1, 1, 2]), [1, 2]);
