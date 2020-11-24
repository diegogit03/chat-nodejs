const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', socket => {

	socket.on('welcome', data => {
		console.log('boas vindas ' + data.name);
	});

	socket.on('word', data => {
		socket.emit('result', data);
	});

	socket.on('disconnect', data => {
		console.log(socket.id, ' disconnect');
	});

});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

http.listen(3000, () => {
	console.log('server is running!');
});
