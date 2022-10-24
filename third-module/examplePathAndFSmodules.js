// const { writeFile } = require('fs');
const path = require("path");
const bunyan = require("bunyan");
const fs = require("fs").promises;


const log = bunyan.createLogger({name:"exampleWithPathAndFSModules"});
log.info("Starting");
// console.log(path.dirname('C:/Study/University/directory.xlsx'));
// console.log(path.basename('C:/Study/University/directory.xlsx'));

async function readFile(filePath) {
  try {
    console.log(__dirname);
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (err) {
    console.error(`Error is thrown when reading file - ${err.message}`);
  }
}

async function createFile(filePath) {
  console.log(filePath);
  try {
    const csvHeaders = "name,salary,position";
    await fs.writeFile(filePath, csvHeaders);
  } catch (err) {
    console.error(`Error is thrown when creating file - ${err.message}`);
  }
}

async function writeFile(filePath, name, salary, position) {
  try {
    let csvLine = `\n${name},${salary},${position}`;
    await fs.writeFile(filePath, csvLine, { flag: "a+" });
    let data = await fs.readFile(filePath);
    csvLine = `\n${"Vasya"},${2000},${"Junior Backend Js"}`;
    await fs.writeFile(filePath, csvLine, { flag: "a" });

    data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (err) {
    console.error(`Error is thrown when writing file - ${err.message}`);
  }
}

async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
  } catch (err) {
    console.error(`Error is thrown when deleting file - ${err.message}`);
  }
}

async function moveFile(source, destination) {
    console.log(path.dirname(destination));
  try {
      if (path.dirname(destination)){
          console.log('New path countains dirs');
          fs.mkdir(path.dirname(destination));
      }
    await fs.rename(source, destination);
  } catch (err) {
    console.error(`Error is thrown when moving file - ${err.message}`);
  }
}

createDirectory = (dirPath) => {
    try {
        fs.mkdir(dirPath, {recursive: false});
    } catch (err) {
        console.error(`Error is thrown when creating directory - ${err.message}`);
    }
}

async function removeDirectory(dirPath) {
    try {
        fs.rmdir(dirPath, {recursive: true});
    } catch (err) {
        console.error(`Error is thrown when removing a directory - ${err.message}`);
    }
}

// readFile(__dirname.split('\\').slice(0,-1).join('\\')+'\\arrays.js');

// console.log(__dirname.split('\\').slice(0,-1).join('\\'));

// createFile("..\\exampleCsv.csv");

// writeFile("..\\exampleCsv.csv", "Aleksandr", 3000, "Middle backend Node.js");
// moveFile('..\\testvexampleCsv1.csv', '..\\testv\\exampleCsv1.csv');


// createDirectory('..\\testv\\test-another\\testh\\eyo\\www', );
removeDirectory('..\\testv');

log.info("Ending");