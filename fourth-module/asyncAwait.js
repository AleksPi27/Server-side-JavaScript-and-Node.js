const calculateTotalBillAmountAfterDiscount = (billAmt, discountPercentage) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (discountPercentage <= 0) {
                reject('Invalid discount percentage');
            }
            resolve((billAmt - (billAmt * discountPercentage)).toFixed(2))
        }, 2000)
    })
}

const validateBillAmount = (billAmt) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (billAmt <= 0) {
                reject('Invalid bill amount');
            }
            resolve(billAmt)
        })
    })
}

const totalBillAmount = async (billAmount, discountPercentage) => {
    const validatedBillAmount = await validateBillAmount(billAmount);
    const discountedAmount = await calculateTotalBillAmountAfterDiscount(validatedBillAmount, discountPercentage);
    return discountedAmount;
}

let billAmt = process.argv[2];
let discountPercentage = process.argv[3];

totalBillAmount(billAmt, discountPercentage).then((amount) => {
    console.log('Discounted bill amount', amount);
}).catch((error) => {
    console.log(error);
})