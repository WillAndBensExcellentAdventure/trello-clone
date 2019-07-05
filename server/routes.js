const authHelpers = require('./config/authHelpers');
const queries = require('./db/queries');


module.exports = (app, passport, db) => {
  app.get('/api/*', (req, res) => {
    res.send(200);
  });

  app.get('/api/test2', (req, res) => {
    console.log('SES PASS', req.user);
  });

  app.get('/api/is-logged-in', (req, res) => {
    if (req.isAuthenticated()) {
      res.status(200).json({
        loggedIn: true,
        user: req.user.username,
      });
    } else {
      res.status(200).json({
        loggedIn: false,
      });
    }
  });

  app.post('/api/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
      if (err) {
        res.json({ success: false, error: err });
      } else if (user) {
        req.login(user, (error) => {
          if (error) {
            res.json({ success: false, error });
          } else {
            res.status(200).json({ success: true, username: user.username });
          }
        });
      }
    })(req, res, next);
  });


  app.post('/api/signup', async (req, res, next) => {
    try {
      await authHelpers.createUser(req);
      passport.authenticate('local', (err, user) => {
        if (err) console.log(err);
        if (user) {
          req.login(user, (error) => {
            if (error) {
              res.json({ success: false, error });
            } else {
              res.status(200).json({ success: true });
            }
          });
        }
      })(req, res, next);
    } catch (error) {
      res.json({ status: 'failed', error });
    }
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.status(200).json({ success: true });
  });

  app.put('/api/createDashboard', (req, res) => {
    if (req.isAuthenticated()) {
      queries.createDashboard(req.user.id, req.body.title, (err, result, dashboardID) => {
        if (err) {
          res.json({ succes: false, error: err });
        } else {
          res.json({ succes: true, dashboardID, result });
        }
      });
    } else {
      res.status(401);
    }
  });

  app.get('/api/getDashboard', (req, res) => {
    if (req.isAuthenticated()) {
      queries.getDashboardByUserID(req.user.id, (err, result) => {

      });
    }
  });
};
