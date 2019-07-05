import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useScrollTrigger,
  withStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { userContext } from "../util/UserContext";

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
  const UserContext = useContext(userContext);

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

  function renderOptions() {
    if (UserContext.state.isLoggedIn) {
      // return <AvatarUsername />
    }
    return (
      <React.Fragment>
        <Button className={classes.button}>
          <Link className={classes.link} to="/login">
            Login
          </Link>
        </Button>
        <Button
          component={Typography}
          className={classes.button}
          variant="contained"
        >
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

  const { classes } = props;
  return (
    <div>
      <ElevationScroll>
        <AppBar className={classes.root}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              <Link className={classes.title} to="/">
                Trellio
              </Link>
            </Typography>
            {renderOptions()}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}

export default withStyles(styles)(Header);
