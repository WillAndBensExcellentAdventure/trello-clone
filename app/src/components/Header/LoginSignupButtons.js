import React from "react";
import { Button, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = ({ breakpoints }) => ({
  link: {
    textDecoration: "none",
    color: "white"
  },
  button: {
    fontFamily: "Arial"
  }
});

function LoginSignupButtons(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Button className={classes.button}>
        <Link className={classes.link} to="/login">
          Login
        </Link>
      </Button>
      <Button className={classes.button} variant="contained">
        <Link
          style={{ color: "#4669c4" }}
          className={classes.link}
          to="/signup"
        >
          Signup
        </Link>
      </Button>
    </React.Fragment>
  );
}

export default withStyles(styles)(LoginSignupButtons);
