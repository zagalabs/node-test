const { date, helpers, internet, lorem, random } = require('faker');

const article = () => {
  const createdAt = date.past();
  const titleLength = random.number({ min: 1, max: 5 });
  const title = lorem.words(titleLength);

  return {
    author: {
      username: internet.userName(),
      bio: lorem.sentence(),
      image: internet.avatar(),
    },
    body: lorem.sentences(),
    createdAt,
    description: lorem.sentence(),
    slug: helpers.slugify(title),
    title,
    updatedAt: date.recent(3),
  };
};

module.exports = {
  article,
};
