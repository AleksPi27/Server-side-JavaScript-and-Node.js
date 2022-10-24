const fs = require('fs');

fs.watchFile("exampleFile.txt", {bigint: false, persistent: true, interval: 4000},
(curr, prev)=>{
    console.log('\nThe example file was edited');
    console.log('Previous file modified time', prev.mtime);
    console.log('Current file modified time', curr.mtime);
    console.log('\nContent of the current file is', fs.readFileSync('exampleFile.txt', 'utf8'));
});

fs.writeFile('exampleFile.txt', 'First part of the content is appended to the middle of the file',{flag: 'a+'}, (err)=> {
    if (err){
        console.log(err);
    }
});

fs.writeFileSync('exampleFile.txt', 'Second part of the content is appended to the of the file', {flag: 'a+'});