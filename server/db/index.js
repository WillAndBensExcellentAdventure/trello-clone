const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

pool.on('error', (err) => {
  throw new Error(err);
});

module.exports = {
  pool,
  query: (text, params, callback) => pool.query(text, params, callback),
};
