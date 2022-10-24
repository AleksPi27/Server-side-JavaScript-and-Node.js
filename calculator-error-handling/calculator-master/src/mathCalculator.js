// Return the sum of the two numbers
const addNumbers = (number1, number2) => {
  return number1 + number2;
}
// Return the difference of the two numbers
const subNumbers = (number1, number2) => {
  return number1 - number2;
}
// Return the product of the two numbers
const mulNumbers = (number1, number2) => {
  return number1 * number2;
}
// Return the quotient of the two numbers, check if the second number is zero, then throw an Error
const divNumbers = (number1, number2) => {
  try {
    if (number2 === 0) {
      throw new Error('Division by zero');
    } else {
      return number1 / number2;
    }
  } catch (err) {
    throw new Error('ERROR::Divide by zero error..!');
  }
}
// Return the mod of the two numbers, check if the second number is zero, then throw an Error
const moduloNumbers = (number1, number2) => {
  try{
    if (number2===0){
      throw new Error('Modulo from zero');
    } else {
      return number1 % number2;
    }
  } catch(err){
    throw new Error('ERROR::Invalid number..!');
  }
}

module.exports = {
  addNumbers, subNumbers, mulNumbers, divNumbers, moduloNumbers
}
