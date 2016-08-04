
const express = require('express');
var bodyParser = require('body-parser');
const port = 8080;

const app = express();
app.use(bodyParser.json());
app.use('/', express.static('./client_side'));
app.use('/', express.static('./'));

app.post('/user', function (req, res) {

  // 
  console.log( 'siva...' + JSON.stringify(req.body) );
  res.send(JSON.stringify(req.body));

});

app.listen(port);
console.log('Running ---  on: '+port);

// added comment lines to server.js