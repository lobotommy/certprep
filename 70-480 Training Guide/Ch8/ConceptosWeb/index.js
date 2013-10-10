var express = require('express');
var app = express();
var formidable = require('formidable');

var dir = express.static(__dirname + '/WebCalculator/WebCalculator');
app.use(dir);



app.get('/', function (request, response) {
    response.redirect('default.html');
});

var port = 8080;
app.listen(port);
console.log("listening on port " + port);