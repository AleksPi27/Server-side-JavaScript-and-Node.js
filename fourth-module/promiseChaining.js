const calculateTotalBillAmountAfterDiscount = (billAmt, discountPercentage) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (discountPercentage <= 0) {
                reject('Invalid discount percantage');
            }
            resolve(billAmt - (billAmt * discountPercentage));
        });
    });
}

const validateBillAmount = (billAmt) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (billAmt <= 0) {
                reject('Invalid bill amount');
            }
            else {
                resolve('Valid bill amount');
            }
        })
    })
}

var billAmt = process.argv[2];
var discountPercentage = process.argv[3];

// calculateTotalBillAmountAfterDiscount(billAmt, discountPercentage).then((result) => {
//     console.log('The discounted bill amount', result);
// }, (error) => {
//     console.log(error);
// })
validateBillAmount(billAmt).then((result) => {
    console.log(result);
    calculateTotalBillAmountAfterDiscount(billAmt, discountPercentage)
        .then((result) => {
            console.log('The discounted bill amount', result)
        }).catch((error)=>{
            console.log(error);
        })
}).catch((error)=> {
    console.log(error);
})