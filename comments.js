// Create web server
// Run: node comments.js
// Test: http://localhost:3000/comments

var http = require('http');
var fs = require('fs');

// Create server
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/comments.html').pipe(res);
}).listen(3000, '');