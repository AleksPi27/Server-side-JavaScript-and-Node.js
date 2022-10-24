function getInUpperCase(arrayOfStrings) {
    console.log(arrayOfStrings);
  let newArray = new Array();
  for (const data of arrayOfStrings) {
      console.log('data', data);
    newArray.push(data.toUpperCase());
  }
  return newArray;
}

function getInLowerCase(arrayOfStrings) {
  let newArray = new Array();
  for (const data of arrayOfStrings) {
    newArray.push(data.toLowerCase());
  }
  return newArray;
}

module.exports = {getInUpperCase, getInLowerCase}