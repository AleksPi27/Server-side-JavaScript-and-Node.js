const _ = require("lodash");
//import the lodash module

//Create a function to find a maximum value from number array.
const findMaxValue = (array) => {
  return _.max(array);
};

//Create a function to return all values from numbers array
//which are greater than the second parameter.​

const filterValues = (array, leverage) => {
  return _.filter(array, (item) => item > leverage);
};

//Create a function to return all values of employeeName array in capital letters.

const nameInCapital = (array) =>{
  array = array.map(item => item.split(" ").map(word => _.capitalize(word)));
  array = array.map(pair => pair.join(" "));
  return array;
}

module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
};
