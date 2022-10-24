const fs = require('fs');

fs.watch('demoFile.txt',{persistent:true} ,(eventType, filename)=>{
console.log('\nThe file', filename, "was modified");
console.log("The type of change was", eventType);
});

setTimeout(()=> fs.renameSync("demoFile.txt","newFile.txt"),1000);

setTimeout(()=> fs.renameSync("newFile.txt", "demoFile.txt"), 2000);

setTimeout(()=> fs.writeFileSync("demoFile.txt", "The file is modified"),3000);