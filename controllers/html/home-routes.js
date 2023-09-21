const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    // Fetch all blog posts and associated user information
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['text', 'created_on', 'user_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
      ],
    });

    // Render the homepage with blog post data
    res.render('home', { posts: postData });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
