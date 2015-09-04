var express = require('express');
var port = process.env.PORT || 3002;
var app = express();

app.use('/images', express.static(__dirname + '/dist/images'));
app.use('/js', express.static(__dirname + '/dist/js'));
app.use('/css', express.static(__dirname + '/dist/css'));
app.use('/fonts', express.static(__dirname + '/dist/fonts'));
app.use('/', express.static(__dirname + '/dist'));

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/dist/index.html');
});


app.listen(port);