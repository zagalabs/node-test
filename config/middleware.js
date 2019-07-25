const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const init = app => {
  app.use(bodyParser.json());
  app.use(cors());
  app.use(helmet());

  return app;
};

module.exports = init;
