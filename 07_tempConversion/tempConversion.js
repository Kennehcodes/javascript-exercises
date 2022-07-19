const ftoc = function(fahTemp) {
  
  let conversion = (fahTemp - 32) * 5/9; 

  
  let result = (Math.round(conversion * 10)) / 10;
  return result;
};

const ctof = function(celTemp) {
  
  let conversion = ((celTemp) * 9/5 + 32)
  
  let result = (Math.round(conversion * 10)) / 10;
  return result;
};
console.log(ftoc(32));


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
