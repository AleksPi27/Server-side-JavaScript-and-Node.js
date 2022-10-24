const fs = require('fs');

const readData = (fileName) => {
    debugger
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (error, data) => {
            if (!error) {
                console.log(data.toString());
            }
            reject(error);
        })
    })
}
readData('input1.txt').then((data) =>
    console.log(data)).catch(error => console.log('nothing'));