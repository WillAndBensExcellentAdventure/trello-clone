const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = (passport, db) => {
  passport.use(new LocalStrategy((username, password, cb) => {
    db.query('SELECT id, username, passwordHash FROM users WHERE username=$1', [username], (err, result) => {
      if (err) {
        throw new Error(err);
      }

      if (result.rows.length > 0) {
        const first = result.rows[0];
        bcrypt.compare(password, first.passwordHash, (err, res) => {
          if (res) {
            cb(null, { id: first.id, username: first.username });
          } else {
            cb(null, false);
          }
        });
      } else {
        cb(null, false);
      }
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    db.query('SELECT id, username FROM users WHERE id = $1', [id], (err, results) => {
      if (err) {
        throw new Error('Error when selecting user on session deserialize', err);
      }

      cb(null, results.rows[0]);
    });
  });
};
