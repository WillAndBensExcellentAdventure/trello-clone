const bcrypt = require('bcrypt');
const uuid = require('uuid/v4');
const db = require('../db');

module.exports = {
  createUser(req) {
    const hash = bcrypt.hashSync(req.body.password);
    const userID = uuid();

    return db.query(
      `INSERT INTO users (ID, username, passwordHash)
           VALUES (${userID}, ${req.body.username}, ${hash}`,
      (error, results) => {
        if (error) return error;
        return results;
      },
    );
  },
};
