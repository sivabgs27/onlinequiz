
const express = require('express');
var bodyParser = require('body-parser');
const port = 8080;

const app = express();
app.use(bodyParser.json());
app.use('/', express.static('./client_side'));
app.use('/', express.static('./'));

app.post('/user_login', function (req, res) {

  // 
 res.setHeader('Content-Type', 'application/json');
 res.send(JSON.stringify({ flag: true }));

});


app.listen(port);
console.log('Running ---  on: '+port);

// added comment lines to server.js