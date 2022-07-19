const reverseString = function(inputStr) {
    let stringBuffer = "";
    let strLen = inputStr.length - 1;
    for (; strLen >= 0; strLen--) {
        stringBuffer += inputStr[strLen];
    }
    return stringBuffer;     
};

// Do not edit below this line
module.exports = reverseString;
