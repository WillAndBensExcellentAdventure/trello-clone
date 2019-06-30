const express = require('express');
require('dotenv').config();
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const db = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

app.use(session({
  secret: 'super secrets',
  resave: false,
  saveUninitialized: false,
}));
require('./config/passport')(passport, db);

app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app, passport, db);

const port = 8080;

app.listen(port, () => console.log(`Listening on port ${port}!`));
