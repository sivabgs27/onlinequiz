var module = require('./lib_list');
const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const port = 8080;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static('./client_side'));
app.use('/', express.static('./'));
app.post('/user', function (req, res) {
  console.log( 'siva...' + JSON.stringify(req.body) );
  res.send(req.body);
});

app.listen(port);
console.log('Running ---  on: '+port);
console.log(module.ss.test);

// added comment lines to server.js