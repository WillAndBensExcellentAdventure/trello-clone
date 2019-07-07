import Axios from "axios";

export default {
  isLoggedIn: function isLoggedIn(cb) {
    Axios.get("/api/is-logged-in").then(response => {
      console.log("Auth resp", response);

      cb(response.data);
    });
  },

  logout: function logout(cb) {
    Axios.get("/api/logout").then(response => {
      cb(response.data.success);
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
        return cb(null, true);
      }
      if (response.data.error) {
        if (response.data.error.code === "23505") {
          return cb("Username taken", false);
        }
      }
      return cb("Uknown error", false);
    });
  }
};
