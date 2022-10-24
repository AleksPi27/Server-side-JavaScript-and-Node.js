const buffer = Buffer.alloc(100);
console.log(buffer);

buffer.write('Hi man!');
console.log(buffer.slice(0,2).toString());
const output = buffer.toString('utf-8');
console.log(output);

console.log(Buffer.isBuffer(buffer));

console.log(buffer.length);

const bufferSrc = Buffer.from('Hello');
const bufferDest = Buffer.alloc(5);
bufferSrc.copy(bufferDest,3);
const data = bufferDest.toString('utf-8');
console.log(data);
console.log(bufferDest);