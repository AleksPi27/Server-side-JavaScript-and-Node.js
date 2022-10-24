const EventEmitter = require('events').EventEmitter;
const fs = require('fs');

const eventEmitter = new EventEmitter();

eventEmitter.addListener('lineEnd', (line)=>{
    console.log('End of line is reached');
    console.log('line', line);
})
// fs.watchFile('test.txt', {bigint: false, persistent: true, interval: 1000},(curr, prev)=>{
//     fs.readFile('test.txt','utf8', (err, data)=>{
//         const dataStr = data.toString();
//         let previousEndLine = -1;
//         for (const letter of dataStr){
//             if (dataStr.charCodeAt(dataStr.indexOf(letter, previousEndLine))===10){
//                 eventEmitter.emit('lineEnd', dataStr.substring(previousEndLine+1, dataStr.indexOf(letter,previousEndLine+1)));
//                 previousEndLine = dataStr.indexOf(letter, previousEndLine+1);
//             }
//         }
//         if (previousEndLine !== dataStr.length){
//             eventEmitter.emit('lineEnd', dataStr.substring(previousEndLine+1));
//         }
//     })
// })


fs.watchFile('test.txt', {bigint: false, persistent: true, interval: 1000},(curr, prev)=>{

    fs.readFile('test.txt','utf8', (err, data)=>{
        const dataStr = data.toString();
        let previousEndLine = -1;
        for (const letter of dataStr){
            if (dataStr.charCodeAt(dataStr.indexOf(letter, previousEndLine))===10){
                eventEmitter.emit('lineEnd', dataStr.substring(previousEndLine+1, dataStr.indexOf(letter,previousEndLine+1)));
                previousEndLine = dataStr.indexOf(letter, previousEndLine+1);
            }
        }
        if (previousEndLine !== dataStr.length){
            eventEmitter.emit('lineEnd', dataStr.substring(previousEndLine+1));
        }
    })
})

