const express = require('express');

const initMiddleware = require('./config/middleware');

const api = initMiddleware(express());

api.get('/health', (_, res) => {
  res.status(200).end();
});

api.listen(3000, () => {
  console.log(`Server listening on http://localhost:3000`);
});
