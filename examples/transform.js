var Transform = require("stream").Transform
var inherits = require("util").inherits

function ToUpper (options) {
  Transform.call(this, options)
}

inherits(ToUpper, Transform)

ToUpper.prototype._transform = function (chunk, encoding, callback) {
  var str = chunk.toString().toUpperCase()
  this.push(str)
  callback()
}

// a simple transform stream
var tx = new ToUpper;

// a simple source stream
var Readable = require('stream').Readable;
var rs = new Readable;
rs.push('the quick brown fox ');
rs.push('jumps over the lazy dog.\n');
rs.push(null);

rs.pipe(tx).pipe(process.stdout);
