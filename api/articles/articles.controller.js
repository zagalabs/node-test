const data = require('./articles.data');

const getArticles = (_, res) =>
  res.status(200).json({
    articles: Array.from({ length: 200 }, () => data.article()),
  });

module.exports = {
  getArticles,
};
