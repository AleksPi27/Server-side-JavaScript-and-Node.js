const { timeStamp } = require('console');
const fs = require('fs');
const readline = require('readline');
//import all the require modules

class Product {
  Product(entry){
    const separatedFields = entry.split(',');
    this.pid = separatedFields[0];
    this.product_name = separatedFields[1];
    this.brand = separatedFields[2];
    this.product_url = separatedFields[3];
    this.retail_price = separatedFields[4];
    this.product_rating = separatedFields[5];
  }
}
//write try catch to hanlde the exceptions

//More userdefined methods can be written if required to write the logical stuff

function createReadStreamSafe(fileName, cb) {
  return new Promise((resolve, reject)=>{
    const fileStream = fs.createReadStream(fileName);
    fileStream.on('error', reject)
    .on('open',()=>{
      resolve(this);
    })
  })
}

//return the callback with appropriate data where ever require in all the methods

//This method will read the file it takes two parameters first the fileName 
//and second the callback
const readFileContents = (fileName, cb) => {
  const fileContents = [];
  let isFirst = true;

  const file = readline.createInterface({
    input: fs.createReadStream(fileName).on('error', (err)=>{cb("Encountered error while reading file contents..!")}),
    output: process.stdout,
    terminal: false
  });

  file.on('line', (line) => {
    if (!isFirst){
      fileContents.push(line);
    } else {
      isFirst = false;
    }
  });

  file.on('close', () => {
    cb(null, fileContents);
  });

  file.on('error', (err) => {
    cb("Encountered error while reading file contents..!");
  })
}

//This method will sortDataonprice it will take two parameters one is fileContent
//second the callback
const sortDataOnPrice = (fileContents, cb) => {
    //use lodash.sortBy()
    const sortedData = fileContents.sort((a,b)=>{

   return a.retail_price-b.retail_price;
  })
  console.log(sortedData);
  // console.log(fileContents);
  cb(null, sortedData);
}

//This method will sortDataonRating 
const sortDataOnRating = (fileContents, cb) => {
  //use map where ever required 
    fileContents = fileContents.filter(content => content.product_rating!=='No rating available');
  //use lodash sortBy() and compact() if required
   let sortedData = [...fileContents].sort((a,b)=> b.product_rating-a.product_rating);
  // sortedData = sortedData.reverse();
  //use lodash.reverse() if required
  cb(null, sortedData);
}

//This method will write the sortedData in the output file
const writeSortedDataToFile = (outputFileName, sortedData, cb) => {

}





module.exports = {
  readFileContents,
  sortDataOnPrice,
  sortDataOnRating,

}