'use strict';

const socketIOClient = require('socket.io-client');

require('dotenv').config();

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000';
const SAVE_EVENT = 'file-save';
const ERROR_EVENT = 'file-error';

const socket = socketIOClient.connect(SERVER_URL);

socket.on(SAVE_EVENT, payload => {
  console.log('🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰');
  console.log('socket id: ', payload.id);
  console.log('message: ', payload.message);
  console.log('🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰');
});

socket.on(ERROR_EVENT, payload => {
  console.log('😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡');
  console.log('socket id: ', payload.id);
  console.log('message: ', payload.message);
  console.log('😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡');
});