function orderWeight(strng) {
  let arr = strng.split(" ");
  let res = [];
  let theFinal = [];

  for (i = 0; i < arr.length; i++) {
    let f = arr[i].split("").reduce(function (prev, curr) {
      return +prev + +curr;
    });
    res.push(f);
  }

  fin = [...res];
  fin.sort(function (a, b) {
    return a - b;
  });

  // console.log(arr, res, fin);

  for (i = 0; i < arr.length; i++) {
    let c = res.indexOf(fin[i]);
    console.log(res.indexOf(fin[i]));
    theFinal.push(arr.slice(c, c + 1));
    console.log(theFinal);
    res.shift();
    fin.shift();
    // console.log(res, fin);
  }
  return theFinal
    .reduce(function (a, b) {
      return a.concat(b);
    })
    .join(" ");
}

// console.log(orderWeight("103 123 4444 99 2000"));
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")); //"11 11 2000 10003 22 123 1234000 44444444 9999"
