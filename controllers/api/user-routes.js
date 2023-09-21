const router = require('express').Router();
const { User } = require('../../models');

// User signup route
router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    // Set the user as logged in
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// User login route
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData || !userData.checkPassword(req.body.password)) {
      res.status(400).json({ message: 'Incorrect username or password. Please try again.' });
      return;
    }

    // Set the user as logged in
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// User logout route
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
