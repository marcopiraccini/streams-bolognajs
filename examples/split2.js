var split2 = require('split2')
var through2 = require('through2')

var stream = through2({ objectMode: true }, function(chunk, enc, callback) {
    var string = chunk.toString()
    var result = '[' + string.toUpperCase() + ']' + '\n';
    this.push(result)
    callback()
})

process.stdin.pipe(split2()).pipe(stream).pipe(process.stdout);
