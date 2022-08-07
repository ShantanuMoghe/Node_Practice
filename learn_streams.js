/**
 * Streams used for reading & writing data sequencially.
 * Readable, witeable, duplex, transform
 */

const {createReadStream} = require('fs');

const stream = createReadStream('./file-content/third_file.txt');
const streamWithBufferSize = createReadStream('./file-content/third_file.txt', {highWaterMark: 90000, encoding: 'utf8'});
stream.on('data', (res)=>{
    console.log(res, '\n');
})

streamWithBufferSize.on('data', (res)=>{
    console.log(res);
})
