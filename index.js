const http = require('http');
const port = 8080;
const fs = require('fs');

http
  .createServer(function (req, res) {
    function servePage(file) {
      fs.readFile(file, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    }
    const { url } = req;
    console.log('🚀 ~ file: index.js:8 ~ url:', url);
    if (url === '/') {
      servePage('index.html');
    } else if (url === '/about') {
      servePage('about.html');
    } else if (url === '/contact-me') {
      servePage('contact-me.html');
    } else {
      servePage('404.html');
    }
  })
  .listen(port);
