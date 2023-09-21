// controllers/api/post-routes.js
const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../util/auth');

// Create a new blog post route
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id, 
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Retrieve a specific blog post by ID
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
    // Include comments for the post
          model: Comment, 
          attributes: ['text', 'created_on', 'user_id'],
    // Include user information for each comment
          include: {
            model: User, 
            attributes: ['username'],
          },
        },
        {
    // Include user information for the post creator        
          model: User, 
          attributes: ['username'],
        },
      ],
    });

    res.status(200).json(postData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
