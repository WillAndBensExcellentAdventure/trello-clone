import Axios from 'axios';

class Auth {
  constructor() {
    this.isAuthenticated = false;
    this.username = '';

    this.isLoggedIn();
  }

  isLoggedIn() {
    Axios.get('/api/isLoggedIn').then((response) => {
      if (response.data.isLoggedIn) {
        this.isAuthenticated = true;
        this.username = response.data.username;
      }
    });
  }

  logout(cb) {
    Axios.get('/api/logout').then((response) => {
      this.isAuthenticated = false;
      cb();
    });
  }

  login(username, password, cb) {
    Axios.post('/api/login', {
      username, password,
    }).then((response) => {
      if (response.data.success) {
        this.isAuthenticated = true;
        cb(true);
      } else {
        cb(false, response.data.error);
      }
    });
  }

  signup(username, password, cb) {
    Axios.post('/api/signup', {
      username, password,
    }).then((response) => {
      if (response.data.success) {
        this.isAuthenticated = true;
        this.username = response.data.user;
        return cb(true, response.data.user);
      }
      if (response.data.error) {
        if (response.data.error.code === '23505') {
          return cb(false, 'User name taken');
        }
      }
      return cb(false, 'Uknown error');
    });
  }
}

export default new Auth();
