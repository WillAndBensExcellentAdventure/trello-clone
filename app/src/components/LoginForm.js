import React, { useState } from "react";
import { TextField, Typography, withStyles, Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import classnames from "classnames";
import Auth from "../util/Auth";

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
  const [redirect, setRedirect] = useState(false);
  const [loginError, setLoginError] = useState("");

  const { classes } = props;

  function handleSubmit() {
    Auth.login(username, password, (isLoggedIn, error) => {
      if (error) {
        return setLoginError(error);
      }
      if (isLoggedIn) {
        return setRedirect(true);
      }
    });
  }

  function handleDisableButton() {
    if (username.length === 0 || password.length === 0) {
      return true;
    }
    return false;
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4">Login to your Trellio Account</Typography>
      <Link to="/signup">Or signup for Trellio</Link>
      <div className={classes.marginTop}>
        <Typography>Username</Typography>
        <TextField
          error={loginError}
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
          error={loginError}
          variant="outlined"
          className={classes.fullWidth}
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </div>
      {loginError.length > 0 ? (
        <Typography
          style={{ color: "red", position: "absolute" }}
          variant="overline"
        >
          {loginError}
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
      {redirect ? <Redirect to="/dashboard" /> : null}
    </div>
  );
}

export default withStyles(styles)(LoginForm);
