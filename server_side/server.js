
var lib = require('./lib_list');
const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoDB = require('mongoose');
const port = 8080;

//connect to Database 
mongoDB.connect('mongodb://localhost/onlinequiz',function(err){
  if(err) throw err;
  else console.log("Connected To Database............ OnlineQuiz");
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static('./client_side'));
app.use('/', express.static('./'));

app.post('/user_reg', function (req, res) {
  console.log( 'siva...' + JSON.stringify(req.body) );
  lib.user_reg.store(req.body);
  res.send(req.body);
});
app.post('/user_login', function (req, res) {
 res.setHeader('Content-Type', 'application/json');
 res.send(JSON.stringify({ loggedin: falses }));
});
app.post('/reset_password', function (req, res) {
 res.setHeader('Content-Type', 'application/json');
 res.send(JSON.stringify({ isEmail: falses }));
});
app.get('/new_userpass/:email/:key',function(req,res){
  res.send(lib.setpassword.html(req.params.email,req.params.key));
});
app.post('/set_userpass/:email/:key',function(req,res){
  res.send(lib.pass_reg.store(req.params.key,req.body.password));
  console.log(req.body.password);

});


app.listen(port);
console.log('Running ---  on: '+port);


//lib.email.sendemail('Giri','sivabgs27@gmail.com','http://localhost:8080/confirm_email/asdfjaslfj');
//console.log(module.ss.test);


// added comment lines to server.js