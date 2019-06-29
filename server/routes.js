const authHelpers = require('./config/authHelpers');


module.exports = (app, passport, db) => {
  app.get('/', (req, res) => {
    res.send('hello');
  });

  app.post('/signup', (req, res, next) => authHelpers.createUser(req).then((results) => {
    passport.authenticate('local', (error, user, info) => {
      if (user) res.status(200).json({ status: info });
    })(req, res, next);
  }));
};
