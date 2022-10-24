const fs = require("fs");
// import the lodash library
const lodash = require("lodash");

// Read the file data and return the data in the resolved Promise
const read = (fileName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
          console.log('error got');
          reject(err);
        } else {
          resolve(data);
        }
      });
    })
  });
};
// Define a function to Convert the file content to upper case and return the result in the resolved Promise
const convertToUpperCase = (fileContents) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!fileContents) {
        reject(Error('There is no file content'));
      } else {
        const splittedFileContent = fileContents.split(',');
        const conv = splittedFileContent.map(el => el.toUpperCase());
        // const res = conv.join(',');
        console.log('convertedFileContent', conv);
        resolve(conv);
      }
    })
  });
};
// Define a function to read and convert the file contents, use the then and catch blocks here
const readAndConvertFileContents = (fileName, cb) => {
  // const fileContentPromise = read(fileName);
  // console.log('after getting file content promise', fileContentPromise);

  read(fileName).catch(err =>{ cb('Encountered error while reading file contents..!')}).then(data => convertToUpperCase(data)).then(data => cb(null, data));

};

module.exports = {
  readAndConvertFileContents,
};
