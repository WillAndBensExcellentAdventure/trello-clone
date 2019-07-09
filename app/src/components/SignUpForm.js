import React, { useState, useContext } from "react";
import { TextField, Typography, withStyles, Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import classnames from "classnames";
import userContext from "../util/UserContext";
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

function SignUpForm(props) {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const UserContext = useContext(userContext);

  const { classes } = props;

  function handleSubmit(e) {
    e.preventDefault();
    Auth.signup(username, password, (error, isLoggedIn) => {
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

  function handleUsernameConstraints(usernameInput) {
    if (usernameInput.length >= 1 && usernameInput.length < 3) {
      setUsernameError("username must be over 3 characters");
    } else {
      setUsernameError(false);
    }
    setUser(usernameInput);
  }

  function handlePasswordConstraints(passwordInput) {
    if (passwordInput.length > 0 && passwordInput.length < 5) {
      setPasswordError("Password must be longer than 5 characters");
    } else {
      setPasswordError(false);
    }
    setPassword(passwordInput);
  }

  function handleDisableButton() {
    if (passwordError || usernameError) {
      return true;
    }
    if (username.length === 0 || password.length === 0) {
      return true;
    }
    return false;
  }

  return (
    <div className={classes.root}>
      <Typography>
        This is a demo app, and does not include password recovery
        functionality. Don't use your bank password.
      </Typography>
      <Typography variant="h4">Create a Trellio Account</Typography>
      <Link to="/login">Or login to your account</Link>
      <form onSubmit={e => handleSubmit(e)}>
        <div className={classes.marginTop}>
          <Typography>Username</Typography>
          <TextField
            error={usernameError}
            variant="outlined"
            className={classes.fullWidth}
            value={username}
            onChange={e => {
              handleUsernameConstraints(e.target.value);
            }}
          />
        </div>
        {usernameError.length > 0 || UserContext.state.loginError ? (
          <Typography
            style={{ color: "red", position: "absolute" }}
            variant="overline"
          >
            {usernameError || UserContext.state.loginError}
          </Typography>
        ) : null}
        <div className={classes.marginTop}>
          <Typography>Password</Typography>
          <TextField
            type="password"
            error={passwordError}
            variant="outlined"
            className={classes.fullWidth}
            value={password}
            onChange={e => {
              handlePasswordConstraints(e.target.value);
            }}
          />
        </div>
        {passwordError.length > 0 ? (
          <Typography
            style={{ color: "red", position: "absolute" }}
            variant="overline"
          >
            {passwordError}
          </Typography>
        ) : null}

        <Button
          disabled={handleDisableButton()}
          onClick={() => handleSubmit()}
          className={classnames(classes.fullWidth, classes.marginTop)}
          variant="contained"
        >
          Create New Account
        </Button>
        {UserContext.state.isLoggedIn ? (
          <Redirect to={`/${UserContext.state.username}/boards`} />
        ) : null}
      </form>
    </div>
  );
}

export default withStyles(styles)(SignUpForm);
