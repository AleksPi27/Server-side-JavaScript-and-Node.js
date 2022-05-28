number = parseInt(process.argv[2]);

const swapDigits = (number) => {
  let swappedNumber = 0;
  if (number < 0) swappedNumber = 0;
  else {
    if (number.toString().length % 2 != 0) {
      swappedNumber = Math.floor(number / 10 ** (number.toString().length - 1));
      number = number.toString().substring(1);
    }

    while (number.toString().length >= 2) {
      let nextNumber = Math.floor(
        number / 10 ** (number.toString().length - 1)
      );
      number = number.toString().substring(1);
      let curNumber = Math.floor(number / 10 **(number.toString().length - 1));
      number = number.toString().substring(1);
      swappedNumber *= 10;
      swappedNumber += curNumber;
      swappedNumber *= 10;
      swappedNumber += nextNumber;
    }
  }
  return swappedNumber;
};

module.exports = swapDigits;
