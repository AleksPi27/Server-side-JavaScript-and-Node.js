const products = [
    ["Gucci Round Bucklet Belt", 300],
    ["Gucci Round Bucklet Belt", 300],
    ["Smiley T-shirt", 50],
    ["Smiley T-shirt", 50],
    ["Shinie Nail Paint", 10],
];


// const discountDeduction = discount => {
//     for (let i = 0; i < products.length; i++) {
//         products[i][1] = products[i][1] - products[i][1]*discount/100;
//     }
// };

// discountDeduction(15);

// console.log(products);

const discount =15;
const discountedProducts = (discount => products.map(product => [product[0], product[1]-product[1]*discount/100]))(15);

console.log(discountedProducts);