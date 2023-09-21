const { Comment } = require('../models');

const commentData = [
  {
    text: 'Great post! I learned a lot from this.',
    user_id: 2,
    post_id: 1,
  },
  {
    text: 'I have a question about this topic. Can you please explain further?',
    user_id: 3,
    post_id: 1,
  },
  {
    text: 'I totally agree with your points in this post.',
    user_id: 4,
    post_id: 2,
  },
  {
    text: 'Nice article. Looking forward to more content like this.',
    user_id: 5,
    post_id: 3,
  },
  {
    text: 'This is very helpful information. Thanks for sharing!',
    user_id: 1,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
