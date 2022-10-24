const os = require('os');

console.log('System hostname:', os.hostname());
console.log(`System has ${os.cpus()[0]} CPUs`);
console.log('System homedir is', os.homedir());
console.log('System architecture is', os.arch());

console.log(os.cpus());