const http = require('http');
const port = 8080;
const fs = require('fs');

http
  .createServer(function (req, res) {
    const { url } = req;
    console.log('🚀 ~ file: index.js:8 ~ url:', url);
    if (url === '/') {
      fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    } else if (url === '/about') {
      fs.readFile('about.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    } else if (url === '/contact-me') {
      fs.readFile('contact-me.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile('404.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(port);
