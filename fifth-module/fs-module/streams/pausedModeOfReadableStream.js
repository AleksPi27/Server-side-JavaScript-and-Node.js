const fs = require('fs');

// console.log(Buffer.from('exampleFile.txt').length);
const readableStream = fs.createReadStream('exampleFile.txt', {start: 0, end: 100,encoding: 'utf8'});
const writableStream = fs.createWriteStream('exampleDestFile.txt', {encoding: 'utf8'});
let data = [];
let chunk;
readableStream.on('readable', () => {
    while ((chunk = readableStream.read(8)) != null) {
        data.push(chunk);
        console.log('chunk size', chunk.length);
    }
});


readableStream.on('end', () => { console.log('End of file is reached!'); console.log(data); });