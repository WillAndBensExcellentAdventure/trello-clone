import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useScrollTrigger,
  withStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  root: {
    position: "fixed",
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white"
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  button: {
    fontFamily: "Arial"
  }
};

function Header(props) {
  function ElevationScroll(props) {
    const trigger = useScrollTrigger({
      threshold: 20,
      disableHysteresis: true
    });

    return React.cloneElement(props.children, {
      elevation: trigger ? 4 : 0,
      style: {
        background: trigger
          ? "#0079bf"
          : "linear-gradient(to right, #0c76c0, #4669c4)"
      }
    });
  }

  const { classes } = props;
  return (
    <div>
      <ElevationScroll>
        <AppBar className={classes.root}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              <Link className={classes.title} to="/">Trellio</Link>
            </Typography>

            <Button className={classes.button}>
              <Link className={classes.link} to="/login">
                Login
              </Link>
            </Button>
            <Button
              component={Typography}
              className={classes.button}
              variant="contained"
              color="#FFF"
            >
              <Link
                style={{ color: "#4669c4" }}
                className={classes.link}
                to="/signup"
              >
                Signup
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}

export default withStyles(styles)(Header);
