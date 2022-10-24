//import all the modules require
const readline = require('readline');
const fs = require('fs');

//Use try and catch to handle the error where ever required
//return the callback with appropriate data where ever require in all the methods

//More userdefined methods can be written if required to write the logical stuff

//This method will take two parameters first the fileName
//and second a callback 
//read file data line by line using readLine
//create array and push all data inside the array


const readFileContentsLineByLine = (fileName, cb) => {

  let fileContents = [];
  let isFirst = true;

  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false
  });

  rl.on('line', (line) => {
    // if (!isFirst) {
    //   fileContents.push(line);
    // } else {
    //   isFirst = false;
    // }
    fileContents.push(line);
  })

  rl.on('close', () => {
    cb(null, fileContents);
  });

}

//This method will take two parameters first the filecontent
//and second the callback 
//use map to filter the data 
//Filter all the records for female candidates given region as southwest.

const filterFemaleCandidates = (fileContents, cb) => {
  let filteredData;
  filteredData = fileContents.filter(content => {
    let contentParsed = content.split(',');
    for (let i=0;i<contentParsed.length;i++){
      contentParsed[i] = contentParsed[i].trim();
    }
    
    console.log(contentParsed);
    console.log(contentParsed[1]);
    console.log(contentParsed[contentParsed.length-1]);

    if (contentParsed[1] === 'female' && contentParsed[contentParsed.length-2] === 'southwest') { 
      console.log('Right condition');
      // contentParsed = contentParsed.join(',');
      return true;
     }
  });
  console.log('filteredData',filteredData);
  cb(null, filteredData);
  //use lodash.compact() method if required

}

//This method will write filtered data in the output file
const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {
  fs.writeFile(outputFileName, filteredData, (err) => {
    if (err) {
      console.log(err);
      cb(null, `Unsuccessfully wrote filtered data to ${outputFileName} file..!`);

    } else {
      cb(null, `Successfully wrote filtered data to ${outputFileName} file..!`);
    }
  })
  //use writeFile method to write the filteredData

}


//This method will read the file content using Streams
//create array and push all the data from file to it


const readFileContentsUsingStream = (fileName, cb) => {
  let fileContents = [];
  let fileContentsString = '';
  fs.createReadStream(fileName, { encoding: 'utf8' })
    .on("error", (err) => {
      console.log("Error while reading contents of file using streams, ERROR::", err);
      cb("Encountered error while reading file contents using streams..!");
    }
    ).on('data', (data) => {
         fileContentsString = fileContentsString.concat(data);
    })
    .on('end', () => {
      fileContents = fileContentsString.split(/\r?\n/).slice(1, -1);
      cb(null, fileContents);
    });

}

//This method will filetDatewithNoChildren it will take two parameters
//first the fileContent and second the callback
//use map if required to filter the data

const filterDataWithNoChildren = (fileContents, cb) => {
  let filteredData;
  //use lodash.compact() if required 
  filteredData = fileContents.filter(content => content.Children === '0' && (content.Sex === 'female' || content.Sex === 'male'));
  cb(null, filteredData);

}




module.exports = {
  readFileContentsLineByLine,
  filterFemaleCandidates,
  readFileContentsUsingStream,
}
