const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();
const receiver = new EventEmitter();

emitter.once('developer', function (language, company){
    setImmediate(()=>{
        console.log('Aleks');
        console.log(language);
        console.log(company);
    })
   
    // console.log(this._events.developer[0][0]);
})

emitter.on('developer', ()=>{
    console.log('Stewart');
    console.log(this);
})

emitter.emit('developer', 'Node.js', 'Google');
emitter.emit('developer', 'Node.js', 'Google');