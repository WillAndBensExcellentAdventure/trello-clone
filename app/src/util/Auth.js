import Axios from "axios";

export default {
  isLoggedIn: function isLoggedIn(cb) {
    Axios.get("/api/isLoggedIn").then(response => {
      if (response.data.isLoggedIn) {
        cb(response.data.isLoggedIn);
      }
    });
  },

  logout: function logout(cb) {
    Axios.get("/api/logout").then(response => {
      this.isAuthenticated = false;
      cb();
    });
  },

  login: function login(username, password, cb) {
    Axios.post("/api/login", {
      username,
      password
    }).then(response => {
      if (response.data.success) {
        cb(null, true);
      } else {
        cb(response.data.error, false);
      }
    });
  },

  signup: function signup(username, password, cb) {
    Axios.post("/api/signup", {
      username,
      password
    }).then(response => {
      if (response.data.success) {
        this.isAuthenticated = true;
        this.username = response.data.user;
        return cb(null, true, response.data.user);
      }
      if (response.data.error) {
        if (response.data.error.code === "23505") {
          return cb("User name taken", false);
        }
      }
      return cb("Uknown error", false);
    });
  }
};
