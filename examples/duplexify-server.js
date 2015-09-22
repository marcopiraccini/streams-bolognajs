var http = require('http');
var map  = require('through2-map');

// TEST WITH:  curl -X POST -d 'test' http://127.0.0.1:8000
var server = http.createServer(function(req, res) {
    if(req.method !== 'POST')
        return res.end('POST please');

    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(8000);
