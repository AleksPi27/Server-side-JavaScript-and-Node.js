const fs = require('fs');

const readableStream = fs.createReadStream('exampleFile.txt');

const writableStream = fs.createWriteStream('exampleDestFile.txt');

readableStream.setEncoding('utf8');
readableStream.on('data', (chunk) => { writableStream.write(chunk) });