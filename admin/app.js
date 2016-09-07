var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('home');
});

app.listen(4000, function() {
    console.log('server listening at ' + 4000);
});