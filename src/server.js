const { Server } = require("socket.io");

const io = new Server(3000, {
    cors: {
      origin: "http://localhost:3000/",
      methods: ["GET", "POST"]
    }
});

io.on('connection', socket => {
    socket.emit('msg', 'hello')
})