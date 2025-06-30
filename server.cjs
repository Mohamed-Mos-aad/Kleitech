// server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

// إعداد السيرفر
const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// الاتصال عند فتح السوكت
io.on('connection', (socket) => {
    console.log('🟢 User connected:', socket.id);

    socket.on('sendMessage', (messageData) => {
        console.log('📤 Message sent:', messageData);

        // إرسالها لكل المستخدمين
        io.emit('receiveMessage', messageData);
    });

    socket.on('disconnect', () => {
        console.log('🔴 User disconnected:', socket.id);
    });
});

// تشغيل السيرفر
const PORT = 3002;
server.listen(PORT, () => {
    console.log(`🚀 Socket.IO Server is running on http://localhost:${PORT}`);
});
