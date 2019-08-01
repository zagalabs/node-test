const express = require('express');

const api = require('./api')
const initMiddleware = require('./config/middleware');

const server = initMiddleware(express());

server.get('/health', (_, res) => {
  res.status(200).end();
});

server.use('/', api);

server.listen(3000, () => {
  console.log(`Server listening on http://localhost:3000`);
});
