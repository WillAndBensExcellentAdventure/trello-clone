const uuid = require('uuid/v4');
const db = require('./index');

module.exports = {
  testDBInsert(req, res) {
    const uud = uuid();
    db.query(`INSERT INTO users (ID, username, passwordHash) VALUES ('${uud}', 'testsname', '10w8221')`, (error, results) => {
      if (error) console.log('INSERT ERROR', error);

      res.status(200).json({ results });
    });
  },

  testDB(req, res) {
    db.query('SELECT * FROM users ORDER BY ID ASC', (error, results) => {
      if (error) res.status(400).json({ error, status: 'Query failed' });
      res.status(200).json({ users: results.rows, sesh: req.session });
    });
  },

  testQuery(req, res) {
    console.log(req.body.username);

    db.query('SELECT ID, username, passwordHash FROM users WHERE username=$1', [req.body.username], (err, result) => {
      res.json(result.rows);
    });
  },

  getDashboardByUserID(userID, cb) {
    db.query('SELECT ID, title FROM dashboards WHERE user_id=$1', [req.user.id], (err, result) => cb(err, result));
  },

  createDashboard(userID, title, cb) {
    const dashboardID = uuid();
    db.query('INSERT INTO dashboards (ID, user_id, title) VALUES ($1, $2, $3)', [dashboardID, userID, title], (err, result) => cb(err, result, dashboardID));
  },
};
