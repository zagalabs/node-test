const express = require('express');
const initMiddleware = require('./config/middleware');

const server = initMiddleware(express());

server.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:3000`);
});

module.exports = server;
