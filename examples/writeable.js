var Writable = require('stream').Writable;

var ws = new Writable( {decodeStrings: false});

ws._write = function (chunk, enc, next) {
    console.log(chunk);
    next();
};

process.stdin.pipe(ws);
