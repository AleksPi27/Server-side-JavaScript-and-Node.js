const calculateTotalBillAmountAfterDiscount = (billAmount, discountPercentage) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (billAmount < 0 || discountPercentage <= 0) {
        reject("Invalid discount percentage");
      }
      resolve(billAmount - billAmount * discountPercentage);
    }, 2000);
  });
};

const validateBillAmount = (billAmount) => {
  if (billAmount < 0) {
    console.log("Invalid bill amount");
  } else {
    console.log("Valid bill amount");
  }
};

var billAmount = process.argv[2];
var discountPercentage = process.argv[3];

calculateTotalBillAmountAfterDiscount(billAmount, discountPercentage).then(result => {
    console.log(result);
}, error => {
    console.log(error);
});
validateBillAmount(billAmount);

