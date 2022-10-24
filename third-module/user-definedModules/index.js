const utils = require('./utils');

var myStringArray =["aleks", "dima", "Kostya", "daniL", "miSHa", "DIMA"];

function getInCapital(myStringArray) {
    return utils.getInUpperCase(myStringArray);
}

console.log(getInCapital(myStringArray));

function getInLower(myStringArray) {
    return utils.getInLowerCase(myStringArray);
}

console.log(getInLower(myStringArray));

for (const myString in myStringArray) {
    console.log((myString));
}