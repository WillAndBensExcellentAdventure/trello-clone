const bcrypt = require('bcrypt');
const uuid = require('uuid/v4');
const db = require('../db');

module.exports = {
  createUser(req, resolve) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const userID = uuid();

    return db.query(
      `INSERT INTO users (ID, username, passwordHash)
           VALUES ('${userID}', '${req.body.username}', '${hash}')`,
      (error, results) => {
        if (error) return console.log(error);
        resolve();
        return results;
      },
    );
  },
};
