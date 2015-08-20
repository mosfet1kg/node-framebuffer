'use strict';

var frambuffer = require('../lib/framebuffer');

var fb = new frambuffer('/dev/fb0');

console.log(fb.toString());
console.log(fb.buffer().length/4);

for(var i=0; i< 30; i++) {
    console.log(fb.buffer().readUInt8(i));
}

fb.close();