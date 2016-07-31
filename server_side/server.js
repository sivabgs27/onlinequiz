
const express = require('express');

const port = 8080;

const app = express();

app.use('/', express.static('./client_side'));
app.use('/', express.static('./'));

app.post('/user', function (req, res) {
  res.send('Got a POST request');
});

app.listen(port);
console.log('Running ---  on: '+port);

// added comment lines to server.js