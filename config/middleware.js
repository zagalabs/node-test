const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const api = require('../api');

const init = app => {
  app.use(bodyParser.json());
  app.use(cors());
  app.use(helmet());
  app.use('/', api);

  return app;
};

module.exports = init;
