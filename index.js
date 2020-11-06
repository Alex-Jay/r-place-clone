
// const express = require('express'),
//     app = express(),
//     server = require('http').createServer(app),
//     io = require('socket.io')(server);

// // console.log(firebase);

// const CANVAS_ROWS = 50;
// const CANVAS_COLS = 50;

// var canvas = [];

// for(let rows = 0; rows < CANVAS_ROWS; rows++) {
//     canvas[rows] = [];
//     for(let cols = 0; cols < CANVAS_COLS; cols++) {
//         canvas[rows][cols] = '#FFFFFF';
//     }
// }

// app.use(express.static("public"));

// io.on('connection', socket => {
//     console.log('Connection successful');
//     socket.emit('canvas', canvas);

//     socket.on('color', data => {
//         canvas[data.row - 1][data.col - 1] = data.color;
//         io.emit('canvas', canvas);
//     })
// });

// server.listen(3000);