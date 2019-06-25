const express = require('express');
const passport = require('passport');
const User = require('../../schema');

const router = express.Router();

router.post('/register', (req, res) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      return res.render('register', { user });
    }

    passport.authenticate('local')(req, res, () => {
      res.redirect('/');
    });
  });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.redirect('/');
});


router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
