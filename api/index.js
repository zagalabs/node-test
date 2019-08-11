const router = require('express').Router();

const articles = require('./articles');

router.get('/health', (_, res) => {
  res.status(200).json(null);
});

router.use('/articles', articles);

module.exports = router;
