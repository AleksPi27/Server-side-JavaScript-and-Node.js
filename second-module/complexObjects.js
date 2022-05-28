const products = [
  { productName: "Gucci Round Bucklet Belt", price: 400 },
  { productName: "Gucci Round Bucklet Belt", price: 450 },
  { productName: "Esbeda Wallet", price: 250 },
  { productName: "Gucci Round Bucklet Belt", price: 300 },
  { productName: "Smiley T-shirt", price: 500 },
  { productName: "Smiley T-shirt", price: 50 },
  { productName: "Smiley T-shirt", price: 250 },
  { productName: "Shinie Nail Paint", price: 100 },
];

const filteredProducts = products
  .filter((product) => product.price <= 300)
  .map((product) => {
    return {
      productName: product.productName.toUpperCase(),
      price: product.price,
    };
  })
  .reduce((countedProductStocks, product) => {
    let existingProduct = countedProductStocks.find(
      (productStock) => productStock.productName === product.productName
    );

    if (!existingProduct) {
      countedProductStocks.push({ productName: product.productName, count: 1 });
    } else {
      existingProduct.count++;
    }
    return countedProductStocks;
  }, []);

const premiumProducts = products.filter((product) => product.price < 300);

console.log(filteredProducts);
