const sumAll = function(n1, n2) {
    let sumBuffer = 0;
    let biggestInt = 0;
    let smallestInt = 0;
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        return "ERROR"
    }
    if (n1 < 0 || n2 < 0) {
        return "ERROR"
    }

    if (n1 > n2) {
        biggestInt = n1;
        smallestInt = n2;
    } else if (n1 < n2){ 
        biggestInt = n2;
        smallestInt = n1;
    } else { //same value case
        biggestInt = n1;
        smallestInt = n2;
    }

    let sum = biggestInt;
    let distance = biggestInt - smallestInt;
    while (distance !== 0) {
        sum += distance;
        distance--;
    }

    return sum;
};




// Do not edit below this line
module.exports = sumAll;
