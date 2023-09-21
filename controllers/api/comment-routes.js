// controllers/api/comment-routes.js
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../util/auth');

// Create a new comment route
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      text: req.body.text,
      user_id: req.session.user_id, 
      post_id: req.body.post_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Retrieve comments for a specific post
router.get('/post/:id', async (req, res) => {
  try {
    const commentsData = await Comment.findAll({
      where: { post_id: req.params.id },
      include: {
        model: User, 
        attributes: ['username'],
      },
    });

    res.status(200).json(commentsData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
