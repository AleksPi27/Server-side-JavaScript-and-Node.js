//Create function addNumbers which will take two parameters add the numbers
//and return the result
function addNumbers(first, second) {
  return first + second;
}

//Create function subNumbers which will take two parameters subtract the numbers
//and return the result
function subNumbers(first, second) {
  return first - second;
}

//Create function mulNumbers which will take two parameters multiply the numbers
//and return the result
function mulNumbers(first, second) {
  return first * second;
}

//Create function divNumbers which will take two parameters divide the numbers
//and return the result
function divNumbers(first, second) {
  if (second === 0) return "Please provide valid numbers..!";
  return first / second;
}

module.exports = {
  addNumbers,
  subNumbers,
  mulNumbers,
  divNumbers,
};
