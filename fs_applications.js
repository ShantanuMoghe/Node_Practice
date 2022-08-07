/** 
 * Read files and write using Promises.
 * Easiest and smoothest pattern.
 * !!!!AVOID CALLBACK HELL!!!!
*/
const {readFile, writeFile} = require("fs").promises

const exec = async ()=>{
    try{
        const first = await readFile('./file-content/first_readable.txt', 'utf8');
        const second =  await writeFile('./file-content/second_file.txt', 'THIS IS DATA!!', 'utf8');
        console.log(first, 'Read this file');
    } catch(error){
        console.log(error)
    }
}

exec() ;