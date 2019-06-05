'use strict';

const socketIOClient = require('socket.io-client');

require('dotenv').config();

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000';
const events = require('../utils/events.js');

const readFile = require('./src/readFile.js');
const uppercaseBuffer = require('./src/uppercaseBuffer.js');
const writeFile = require('./src/writeFile.js');

const socket = socketIOClient.connect(SERVER_URL);

const filename = process.argv.slice(2).shift();

readFile(filename)
  .then((buffer) => uppercaseBuffer(buffer))
  .then((buffer) => writeFile(filename, buffer) || buffer)
  .then( () => {
    socket.emit(events.fileSave, `${filename} saved` );
  })
  .catch(() => {
    socket.emit(events.fileError, 'file error' );
  });