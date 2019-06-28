const express = require('express');
const { Pool } = require('pg');
const uuid = require('uuid/v4');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'trellio',
  password: 'mypassword',
  port: 5432,
});

const testDBInsert = (request, response) => {
  const uud = uuid();
  pool.query(`INSERT INTO users (ID, username, passwordHash) VALUES ('${uud}', 'testsname', '10w8221')`, (error, results) => {
    if (error) console.log('INSERT ERROR', error);
    
    response.status(200).json(results);
  });
};

const testDB = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY ID ASC', (error, results) => {
    if (error) console.log('ERROR', error);
    console.log(results);
    response.status(200).json(results.rows);
  });
};

const app = express();

app.get('/', testDB);
app.get('/insert', testDBInsert);

const port = 8080;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
