const http = require('http');
const port = 8080;
const fs = require('fs');

http
  .createServer(function (req, res) {
    const { url } = req;
    if (url === '/') {
      fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    } else if (url === 'about') {
    } else {
    }
  })
  .listen(port);
