const fs = require('fs');
const events = require('events');
const readline = require('readline');
const { resolve } = require('path');
const { stdout } = require('process');


class Row {
  date;
  customer_id;
  product_category;
  payment_method;
  value;
  time_on_site;
  clicks_in_site

  Row(line) {
    const fields = line.split(',');
    this.date = fields[0];
    this.customer_id = fields[1];
    this.product_category = fields[2];
    this.payment_method = fields[3];
    this.value = fields[4];
    this.time_on_site = fields[5];
    this.clicks_in_site = fields[6];
  }
}
//import all the require module

//Write try and catch and handle the exceptions where ever require
//return the callback with appropriate values in the methods 
// var fileContent = [];
//More userdefined methods can be written if required to write the logical stuff
function readFile(fileName) {
  const fileContent = [];
  const res = [];
  const file = readline.createInterface({
    input: fs.createReadStream(fileName),
    // output: fileContent,
    crlfDelay: Infinity
  });

  file.on('line', (line) => {
    // console.log('line', line);
    const row = new Row(line);
    if (row.payment_method==='credit'){
      fileContent.push(line);
    }
  })

  // await events.once(file, 'close');
  // file.close();
  file.on('close', () => {
    console.log('fileContent length', fileContent.length);
    res = fileContent.map(cont => cont);
  });
  return res;
  // return fivar fileContent = [];leContent;
}

////This method will read the file content the first parameter is filename and 
//second is a callback
//create array name it as  fileContents
const readFileContents = (fileName, cb) => {
  const fileContent = [];
  let isFirst = true;

  const file = readline.createInterface({
    input: fs.createReadStream(fileName),
    // output: fileContent,
    crlfDelay: Infinity
  });

  file.on('line', (line) => {
    // console.log('line', line);
    if (!isFirst) {
      fileContent.push(line);
    } else {
      isFirst = false;
    }
  })

  // await events.once(file, 'close');
  // file.close();
  file.on('close', () => {
    console.log('fileContent length', fileContent.length);
    console.log('fileContent last', fileContent[fileContent.length - 1]);
    cb(null, fileContent);
  });
  //push row by row data in the array created

}

// Use Lodash to filter the data this method will take first parameter
//as fileContents and second parameter as a callback
const filterData = (fileContents, cb) => {
  let filteredData;
  filteredData = fileContents.filter(content => content.payment_method==='credit');
    cb(null,filteredData);
}

//This method will writeFile data to output.txt file
//it is taking parameters are filteredData and a callback
//filteredata will be given by the filterData method
const writeFilteredDataToFile = (filteredData, cb) => {
  try {
    //use writeFile method and write the filteredData in output.txt file
    // let filteredData;
    // filteredData = filteredData.filter(content => content.payment_method==='credit');
    fs.writeFile('output.txt',filteredData,'utf8',()=>{
      cb(null,"Successfully wrote filtered data to output.txt file..!");
    })
  } catch (err) { 
    cb(err,'Error');
  }

}


module.exports = {
  readFileContents,
  filterData,
  writeFilteredDataToFile
}
