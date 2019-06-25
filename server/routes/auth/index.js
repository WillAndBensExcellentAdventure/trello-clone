const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const User = require('../../schema');

const router = express.Router();

router.use(cookieParser());
router.use(bodyParser.urlencoded());
router.post('/register', (req, res) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      console.log('ERROR', err);

      return res.render('register', { user });
    }

    passport.authenticate('local')(req, res, () => {
      req.session.userID = user._id;
      res.redirect('/dashboard');
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
