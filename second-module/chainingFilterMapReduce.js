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

  const nonPremiumProducts = products.filter(product => product[1]<=300)
  .map(product => [product[0].toUpperCase(), product[1]])
  .reduce((stocks, product) => { 
      let stockItem = stocks.find(stock => stock[0]===product[0]);
      if (!stockItem){
          stocks.push([product[0], 1]);
      } else{
          ++stockItem[1];
      }

      return stocks;
  },[]);

  console.log(nonPremiumProducts);