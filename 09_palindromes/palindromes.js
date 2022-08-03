const palindromes = function (givenString) {

    givenString =  givenString.replace(/[^\w]/g, "").toLowerCase();
    

    revString = Array.from(givenString);
    
    let reversed = revString.reverse();

    reversedRed = reversed.reduce((final, element) =>
    {
        return final + element;

    }, "");


    return (reversedRed === givenString)
};

// Do not edit below this line
module.exports = palindromes;
