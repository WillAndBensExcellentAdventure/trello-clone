const routes = require('express').Router();
const dashboard = require('./dashboards');
const auth = require('./auth');

routes.use('/dashboard', dashboard);

routes.use('/auth', auth);

module.exports = routes;
