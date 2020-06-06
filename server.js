const express = require("express");
const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

const PORT = 8000;

let chat = io.of('/chat')
  .on('connection', (socket) => {
  console.log('Connection Made')
  
  socket.broadcast.emit('message', 'connected')
  
  socket.on('send-message', (data) => {
    console.log(data)
    chat.emit('message', data)
  })
})




server.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}.`);
})