/**
 * Following is example for EventEmitter.
 * 
 * IMPORTANT!!
 * When we use server it has function 'on'
 * Server extends net.server which extends <EventEmitter>
 */
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('myEvent', (name, id)=>{
    console.log(`data recieved for ${name} id: ${id}`);
});

customEmitter.on('myEvent', ()=>{
    console.log(`data recieved no arguments.`);
});

customEmitter.emit('myEvent', 'Zorro', 3);
//Output:
//data recieved for Zorro id: 3
//data recieved no arguments.