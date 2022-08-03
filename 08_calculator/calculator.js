const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(arr) {

  if (arr.length === 0) {
    return 0;
  } else {
  let x = arr.reduce((total, element) =>
  {
    return total+= element;
  } )
  return x;
}
};

const multiply = function(arr) {
  let product = arr.reduce((total, currentNumber) => {
    return total *= currentNumber;
  })
return product;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(n) {
  if (n === 0) {
    return 1;
  }

  let accumulator = 1;
  while (n !== 1) 
  {
    accumulator *= n;
    n--;
  }
  return accumulator;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
