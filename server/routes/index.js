const routes = require('express').Router();
const dashboard = require('./dashboards');

routes.use('/dashboard', dashboard);

module.exports = routes;
