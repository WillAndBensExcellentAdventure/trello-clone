const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.urlencoded());

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', (req, res) => {
  // use req.isAuth'd to verify passport session
  if (req.isAuthenticated()) {
    res.send('auth worksies?');
  }
  res.send('not authd')
});
// define the about route
router.get('/about', (req, res) => {
  res.send('About berbs');
});

module.exports = router;
