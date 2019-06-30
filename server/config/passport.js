const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = (passport, db) => {
  passport.use(new LocalStrategy((username, password, cb) => {
    db.query('SELECT ID, username, passwordHash FROM users WHERE username=$1', [username], (error, result) => {
      if (error) {
        throw new Error(error);
      }

      if (result.rows.length > 0) {
        const first = result.rows[0];
        bcrypt.compare(password, first.passwordhash, (err, res) => {
          if (res) {
            cb(null, { id: first.id, username: first.username });
          } else {
            cb('password compare failed', false);
          }
        });
      } else {
        cb('user not found', false);
      }
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    db.query('SELECT ID, username FROM users WHERE ID = $1', [id], (err, results) => {
      if (err) {
        throw new Error('Error when selecting user on session deserialize', err);
      }
      done(null, results.rows[0]);
    });
  });
};
