const fibonacci = function (m) {
  n = parseInt(m);

  if (n < 0) {
    return "OOPS";
  }
  //the fibonacci sequence works by
  //shifting down values, similar to bitwise operating

  function makeFib(n) {
    let a = 1;
    let b = 0;
    let sum = 0;
    let fibArr = [];

    for (let k = 1; k <= n; k++) {
      sum = a + b;
      fibArr.push(sum);
      a = b;
      b = sum;
    }

    return fibArr;
  }

  let findIt = makeFib(n);
  return findIt[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
