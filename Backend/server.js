const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "https://skillinfytech-chat-app-using-websocket-io.onrender.com", 
    methods: ["GET", "POST"]
  }
});
const PORT = process.env.PORT || 3000;

app.use(express.static('../Public'));

// Track online users
const onlineUsers = new Set();

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // 1. Handle User Joining
    socket.on('user joined', (username) => {
        socket.username = username;
        onlineUsers.add(username);
        
        // Broadcast to everyone that a user is online
        io.emit('status update', Array.from(onlineUsers));
        socket.broadcast.emit('chat message', {
            user: 'System',
            text: `${username} joined the chat`
        });
    });

    // 2. Handle Messaging (Broadcasting)
    socket.on('chat message', (msg) => {
        // io.emit sends to EVERYONE, including the sender
        io.emit('chat message', {
            user: socket.username,
            text: msg
        });
    });

    // 3. Handle Disconnect (Offline Status)
    socket.on('disconnect', () => {
        if (socket.username) {
            onlineUsers.delete(socket.username);
            io.emit('status update', Array.from(onlineUsers));
            socket.broadcast.emit('chat message', {
                user: 'System',
                text: `${socket.username} left the chat`
            });
        }
        console.log('User disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});