const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const updatedChat = [
		
];

io.on('connection', socket => {

	socket.emit('showmessages', updatedChat);

	socket.on('message', data => {
		updatedChat.push(data);

		console.log(updatedChat);

		io.emit('showmessages', updatedChat);
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
