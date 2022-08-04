const getTheTitles = function(objArr) {

let o = objArr.reduce((tally, item) => {

tally.push(item.title);
return tally;
}, [])

return o;

} 
// Do not edit below this line
module.exports = getTheTitles;
