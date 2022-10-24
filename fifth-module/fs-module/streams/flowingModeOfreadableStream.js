const fs = require('fs');

const readableStream = fs.createReadStream('exampleFile.txt', 'utf8');

const str = [];
const str1=[];
readableStream.on('data', (data)=>{
    console.log(data);
    str.push(data+ ' ');
});

readableStream.on('data', (data)=> {
    console.log(data);
    str1.push(data);
})

readableStream.on('end', ()=>{
    console.log('End of file is reached!');
    console.log('data is', str);
console.log('data1 is', str1);
})