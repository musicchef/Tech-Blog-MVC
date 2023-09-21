const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../util/auth');

// (protected)
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Fetch user's blog posts
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
    });

    // Render dashboard with the user's blog posts
    res.render('dashboard', { posts: postData });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Add new blog post route
router.get('/new', withAuth, (req, res) => {
  res.render('new-post');
});

// Edit blog post route
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    res.render('edit-post', { post: postData });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
