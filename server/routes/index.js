const routes = require('express').Router();
const dashboard = require('./dashboards');
const auth = require('./auth');

routes.use('/auth', auth);

routes.use('/dashboard', dashboard);

routes.get('/test', (req, res) => {
  console.log(req.session.userID);
});

module.exports = routes;
