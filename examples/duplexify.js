var duplexify = require('duplexify')
var http = require('http')

var createRequest = function(opts) {
  var req = http.request(opts)
  var dup = duplexify(req)
  req.on('response', function(res) { // Res è un readeable stream
    dup.setReadable(res) // Specifico che ora leggo da "res"
  })
  return dup;
}

// Creo il duplex, parte la request è writeable e la response è readeable
var req = createRequest({method: 'POST',host: 'localhost', port:8000});

// Collego sdin e stdout. Req scrive la request e fa leggere la response
process.stdin.pipe(req).pipe(process.stdout);
