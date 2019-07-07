import React, { useState, useContext } from "react";
import { TextField, Typography, withStyles, Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import classnames from "classnames";
import Auth from "../util/Auth";
import userContext from "../util/UserContext";

const styles = ({ breakpoints }) => ({
  root: {
    position: "absolute",
    width: "25%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    [breakpoints.down("md")]: {
      width: "90%"
    }
  },
  marginTop: {
    marginTop: "2rem"
  },
  fullWidth: {
    width: "100%"
  }
});

function LoginForm(props) {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const UserContext = useContext(userContext);
  const { classes } = props;

  function handleSubmit() {
    Auth.login(username, password, (error, isLoggedIn) => {
      if (error) {
        return UserContext.dispatch({
          type: "loginError",
          payload: {
            loginError: error,
            isLoggedIn
          }
        });
      }
      if (isLoggedIn) {
        return UserContext.dispatch({
          type: "loginSuccess",
          payload: {
            isLoggedIn,
            username
          }
        });
      }
    });
  }

  function handleDisableButton() {
    if (username.length === 0 || password.length === 0) {
      return true;
    }
    return false;
  }

  console.log(UserContext);

  return (
    <div className={classes.root}>
      <Typography variant="h4">Login to your Trellio Account</Typography>
      <Link to="/signup">Or signup for Trellio</Link>
      <div className={classes.marginTop}>
        <Typography>Username</Typography>
        <TextField
          variant="outlined"
          className={classes.fullWidth}
          value={username}
          onChange={e => {
            setUser(e.target.value);
          }}
        />
      </div>
      <div className={classes.marginTop}>
        <Typography>Password</Typography>
        <TextField
          type="password"
          variant="outlined"
          className={classes.fullWidth}
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </div>
      {UserContext.state.loginError ? (
        <Typography
          style={{ color: "red", position: "absolute" }}
          variant="overline"
        >
          {UserContext.state.loginError}
        </Typography>
      ) : null}

      <Button
        disabled={handleDisableButton()}
        onClick={() => handleSubmit()}
        className={classnames(classes.fullWidth, classes.marginTop)}
        variant="contained"
      >
        Login
      </Button>

      {UserContext.state.isLoggedIn ? (
        <Redirect to={`${UserContext.state.username}/dashboard`} />
      ) : null}
    </div>
  );
}

export default withStyles(styles)(LoginForm);
