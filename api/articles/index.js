const router = require('express').Router();
const controller = require('./articles.controller');

router.get('/', controller.getArticles);

module.exports = router;
