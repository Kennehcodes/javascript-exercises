//This function works by taking in a user index as the first parameter
//any subsequent parameters will be items to search for and delete.
//these items are referenced by their value not their index

const removeFromArray = function(userArr, ...param) {

    for (const pTimes in param) {
        for (const item in userArr) {
            if (param[pTimes] === userArr[item]) {
                userArr.splice(item, 1);
            }
    }
    }

    return userArr;
};

// Do not edit below this line
module.exports = removeFromArray;
