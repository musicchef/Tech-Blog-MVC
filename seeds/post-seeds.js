const { Post } = require('../models');

const postData = [
  {
    title: 'Introduction to Tech Blogging',
    content: 'This is an introductory blog post about tech blogging...',
    user_id: 1,
  },
  {
    title: 'Web Development Frameworks',
    content: 'In this post, we explore various web development frameworks...',
    user_id: 2,
  },
  {
    title: 'JavaScript Fundamentals',
    content: 'Learn the basics of JavaScript programming...',
    user_id: 3,
  },
  {
    title: 'Database Design Principles',
    content: 'An overview of database design best practices...',
    user_id: 4,
  },
  {
    title: 'Cybersecurity Tips',
    content: 'Protect your online presence with these cybersecurity tips...',
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
