var express = require('express'),
    _       = require('lodash'),
    config  = require('../config'),
    jwt     = require('jsonwebtoken');

var app = module.exports = express.Router();

// XXX: This should be a database of users :).
var users = [{
  id: 1,
  username: 'Rajprakash05@gmail.com',
  password: 'rajraj'
}];

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresInMinutes: 60*5 });
}



app.post('/user_login', function(req, res) {
  

  var user = _.find(users, {username: req.body.Email});
  if (!user) {
    return res.status(401).send("The username or password don't match");
  }

  if (!(user.password === req.body.Password)) {
    return res.status(401).send("The username or password don't match");
  }

  res.status(201).send({
    id_token: createToken(user)
  });
});