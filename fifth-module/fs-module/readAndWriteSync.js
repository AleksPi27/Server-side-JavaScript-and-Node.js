const fs = require('fs');

try {
    const writeData = fs.writeFileSync('readAndWriteSync.txt','Hiiiii!');
    const data = fs.readFileSync('readAndWriteSync.txt','utf8');
    console.log(writeData);
    console.log(data);
} catch(err){
    console.error(err);
}