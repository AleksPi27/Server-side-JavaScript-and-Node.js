const readline = require('readline');
const fs = require('fs');
const file = readline.createInterface({
    input: fs.createReadStream('demo.txt'),
    output: process.stdout,
});

file.on('line', (line) => {
    console.log('reading line', line);
});

// file.close();