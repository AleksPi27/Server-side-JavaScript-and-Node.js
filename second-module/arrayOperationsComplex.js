const products = [
  ["Gucci Round Bucklet Belt", 400],
  ["Gucci Round Bucklet Belt", 450],
  ["Esbeda Wallet", 250],
  ["Gucci Round Bucklet Belt", 300],
  ["Smiley T-shirt", 500],
  ["Smiley T-shirt", 50],
  ["Smiley T-shirt", 250],
  ["Shinie Nail Paint", 100],
];

const premiumProducts = products.filter((product) => product[1] > 300);
const filteredProducts = products.filter((product) => product[1] <= 300);

const discountedFilteredProducts = ((discount) =>
  filteredProducts.map((product) => [
    product[0],
    product[1] - (product[1] * discount) / 100,
  ]))(15);

const countedProductStocks = products.reduce((stocks, product) => { 
    let stockItem = stocks.find(stock => stock[0] === product[0]);
    if (!stockItem) {
        stocks.push([product[0], 1]);
    } else {
        ++stockItem[1];
    }
    return stocks;
}, []);

console.log(premiumProducts);

console.log(filteredProducts);

console.log(discountedFilteredProducts);

console.log(countedProductStocks);
