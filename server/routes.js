const authHelpers = require('./config/authHelpers');
const queries = require('./db/queries');


module.exports = (app, passport, db) => {
  app.get('/api', (req, res) => {
    res.send('worl');
  });

  app.get('/api/test2', (req, res) => {
    console.log('SES PASS', req.user);
  });

  app.post('/api/test', (req, res, next) => {
    if (req.isAuthenticated()) {
      res.send('authd');
      next();
    } else {
      res.send('no auth');
    }
  });

  app.post('/api/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
      if (err) console.log(err);
      if (user) {
        req.login(user, (error) => {
          console.log('logg');

          if (error) console.log(error);
        });
        res.status(200).json({ status: 'success' });
      }
    })(req, res, next);
  });


  app.post('/api/signup', async (req, res, next) => {
    await new Promise((resolve, reject) => {
      authHelpers.createUser(req, resolve);
    });

    passport.authenticate('local', (err, user, info) => {
      if (err) console.log(err);
      if (user) {
        req.login(user, (error) => {
          if (error) console.log(error);
        });
        res.status(200).json({ status: 'success' });
      }
    })(req, res, next);
  });
};
