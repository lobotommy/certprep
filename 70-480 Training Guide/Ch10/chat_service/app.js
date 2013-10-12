var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/', function (req, res) {
    res.redirect('default.html');
});

var usernames = {};

io.sockets.on('connection', function(socket) {
    socket.on('sendchat', function(data) {
        io.sockets.emit('updatechat', socket.username, data);
    });

    socket.on('adduser', function(username) {
        socket.username = username;
        usernames[username] = username;
        socket.emit('updatechat', 'You have connected!');
        socket.broadcast.emit('updatechat', 'SERVER', username + ' has connected');
        io.sockets.emit('updateusers', usernames);
    });

    socket.on('disconnect', function () {
        delete usernames[socket.username];
        io.sockets.emit('updateusers', usernames);
        socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected.');
    });
});

var port = 8080;
server.listen(port);
console.log('Listening on port ' + port);