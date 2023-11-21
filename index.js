const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const PORT = 8080;

router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

router.get('/about', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'about.html'));
});

router.get('/contact-me', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'contact-me.html'));
});

router.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'));
});

app.use(router);

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});
