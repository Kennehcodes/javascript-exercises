const repeatString = function(inputStr, repeatTimes) {
    let holder ="";
    if (repeatTimes < 0) {
        return "ERROR";
    } else if (repeatTimes === 0) {
        return holder;
    } else {
        for (let i = 0; i < repeatTimes; i++) {
            holder += inputStr;
        }
        return holder;
    }
};

// Do not edit below this line
module.exports = repeatString;
