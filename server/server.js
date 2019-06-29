const express = require('express');
const uuid = require('uuid/v4');
require('dotenv').config();
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const db = require('./db');

const testDBInsert = (request, response) => {
  const uud = uuid();
  db.query(`INSERT INTO users (ID, username, passwordHash) VALUES ('${uud}', 'testsname', '10w8221')`, (error, results) => {
    if (error) console.log('INSERT ERROR', error);

    response.status(200).json(results);
  });
};

const testDB = (request, response) => {
  db.query('SELECT * FROM users ORDER BY ID ASC', (error, results) => {
    if (error) console.log('ERROR', error);
    console.log(results);
    response.status(200).json(results.rows);
  });
};

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

app.use(session({
  secret: 'super secrets',
  resave: false,
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app, passport, db);
require('./config/passport')(passport, db);

// app.get('/', testDB);
// app.get('/insert', testDBInsert);

const port = 8080;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
