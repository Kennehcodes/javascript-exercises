const findTheOldest = function(personArr) {
    let toGiveBack = 0;
    let thisYear = new Date();
    thisYear = thisYear.getFullYear();
  

    let findOldest = personArr.reduce((tally, element) => {
        
        if (element.yearOfDeath === undefined) {
            element.yearOfDeath = thisYear;
        }
        element.yearsAlive = (element.yearOfDeath - element.yearOfBirth);
        if (element.yearsAlive > tally.years) {
            tally.years = element.yearsAlive; 
            tally.name = element.name;
        }
        return tally;
    }, {years: 0})




return findOldest;
}
// Do not edit below this line
module.exports = findTheOldest;
