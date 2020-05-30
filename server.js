const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = 8000;

io.on('connection', (client) => {
  console.log('Connection Made')
  // console.log(client)
  client.on('join', (data) => {
    console.log(data);
  })
})

app.get('/', (request, response)=> {
  console.log("Tried Connection")
  response.send(status="200")
})


server.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}.`);
})