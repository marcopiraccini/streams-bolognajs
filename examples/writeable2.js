'use strict';

var stream = require('stream');
var rs = stream.Readable();

var i = 1;
rs._read = function () {
    i++;
    if (i > 5) {return rs.push(null);}
    return this.push("test");
};
rs.setEncoding('utf8');

var ws = stream.Writable({decodeStrings:false});
ws._write = function (chunk, enc, next) {
    console.log("Received chunk", chunk, "with encode", enc);
    next();
};

// console.log(ws._writableState);
rs.pipe(ws);
