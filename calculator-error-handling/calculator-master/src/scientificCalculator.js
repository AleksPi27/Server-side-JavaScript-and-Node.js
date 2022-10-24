function float2int(number) {
  return number | 0;
}


function squareRoot(n) {
  let avg = (a, b) => (a + b) / 2;
  let c = 5;
  let b;

  for (let i = 0; i < 20; i++) {
    b = n / c;
    c = avg(b, c);
    console.log('i = ',i);
    console.log('b = ',b);
    console.log('c = ',c);
  }
  return c;
}


// Return the ceil value of the number, check if the number is < or = zero, then throw an Error
const computeCeil = (number) => {
  try {
    if (number <= 0) {
      throw new Error('Invalid number');
    }
    const intNumber = float2int(number);
    console.log('intNumber', intNumber);
    console.log('number', number);
    if (intNumber === number) {
      return number;
    } else {
      return intNumber + 1;
    }
  } catch (err) {
    throw new Error("ERROR::Number is less than or equal to zero..!");
  }
}
// Return the floor value of the number, check if the number is < or = zero, then throw an Error
const computeFloor = (number) => {
  try {
    if (number <= 0) {
      throw new Error('Invalid number');
    }
    return float2int(number);
  } catch (err) {
    throw new Error('ERROR::Number is less than or equal to zero..!');
  }
}
// Return the square root of the number, check if the number is < or = zero, then throw an Error
const computeSquareRoot = (number) => {
  try{
    if (number<=0){
      throw new Error('Invalid number');
    } else {
      return squareRoot(number);
    }
  } catch(err){
    throw new Error('ERROR::Number is less than or equal to zero..!');
  }
}
// Return the exponent value of the number, check if the number is < or = zero, then throw an Error
const computePower = (number, powerOf) => {
  try {
    if (number <= 0 || powerOf<=0){
      throw new Error('Incorrect power');
    } else {
      return number ** powerOf;
    }
  } catch(err){
    throw new Error('ERROR::Number or power is less than or equal to zero');
  }
}

module.exports = {
  computeCeil, computeFloor, computeSquareRoot, computePower
}
