const fs = require('fs');

// fs.readFile('readAndWriteAsync.txt', 'utf8', (err,data)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log(data);
// });

// console.log('readFile called');

// fs.writeFile('readAndWriteAsync.txt', '\nNew string appended', {flag: 'a+'},(err)=>{
// if (err){
// return console.log(err);
// }
// console.log('file changed successfully');
// })

fs.readFile('FirstFile.txt','utf8', (err,data)=>{
    if(err){
        console.log(err);
    } else{
        console.log(data);
    }
});

const data = fs.readFileSync('SecondFile.txt','utf8');

console.log(data);