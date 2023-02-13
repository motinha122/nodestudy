const {EventEmitter} = require('events');
const ev = new EventEmitter();

ev.on('algo',(message)=>console.log('ouvi você '+message));

ev.once('algo',(message)=>console.log('ouvi você '+message));


ev.emit('algo','batata');
ev.emit('algo','potato');
ev.emit('algo2','batata');