const fs = require('fs');
const readline = require('readline');
const writeStream = fs.createWriteStream('outputFile.txt');

const file = readline.createInterface({
    input: fs.createReadStream('input.txt')
})

var finalData = [];

file.on('line', (line)=>{
    const myArray = line.split(",");
    for (const el of myArray){
        const data = (el.trim().substring(0,1).toUpperCase()).concat((el.trim().substring(1)).toLowerCase());
        console.log('data', data.charAt(0));
        finalData.push(data);
    }

    writeStream.write(finalData.toString()+'\n');
    finalData=[];
    
})