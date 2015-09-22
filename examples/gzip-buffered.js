var fs = require('fs');
var zlib = require('zlib'); // zippa node buffers (https://nodejs.org/api/zlib.html)
var file = process.argv[2];

fs.readFile(file, function(err, buffer) {
    zlib.gzip(buffer, function(err, buffer) {   // https://nodejs.org/api/zlib.html#zlib_zlib_gzipsync_buf_options
        fs.writeFile(file + '.buffered.gz', buffer, function(err) {
            console.log('File successfully compressed');
        });
    });
});
