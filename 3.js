function unusedDigits(...args) {
  let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let result = [];
  let arr = [...args];
  if (!arr) {
    return [];
  } else {
    let arr2 = arr.map((digit) => {
      return String(digit).split("");
    });
    if (!arr2) {
      return [];
    } else {
      let arr3 = arr2.reduce(function (a, b) {
        return a.concat(b);
      });

      for (i = 0; i < nums.length; i++) {
        if (!arr3.includes(nums[i])) {
          console.log(arr2.includes(nums[i]));
          result.push(nums[i]);
        }
      }

      return result.join("");
    }
  }
}

console.log(unusedDigits(12, 34, 56, 78), "09");
console.log(unusedDigits(2015, 8, 26), "3479");
