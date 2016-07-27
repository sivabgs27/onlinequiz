
const express = require('express');

const port = 8080;

const app = express();

app.get('/',function(req,res){
    res.send('Welcome to Online Quiz Application');
});

app.listen(port);
console.log('Running on: '+port);

// added comment lines to server.js