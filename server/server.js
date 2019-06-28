'use strict';
const PORT = process.env.PORT || 3000;
const socketIO = require('socket.io')(PORT);
const events = require('../utils/events.js');

socketIO.on('connection', (socket) => {
  console.log('(server) New socket connected : ', socket.id);

  socket.on(events.fileSave, (message) => {
    console.log(message);
    socket.broadcast.emit(events.fileSave, {id: socket.id, message});
  });

  socket.on(events.fileError, (message) => {
    console.log(message);
    socket.broadcast.emit(events.fileError, {id: socket.id, message});
  });
});