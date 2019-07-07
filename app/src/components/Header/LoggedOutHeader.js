import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  withStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LoginSignupButtons from "./LoginSignupButtons";

const styles = {
  root: {
    position: "fixed",
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white"
  }
};

function LoggedOutHeader(props) {
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
              <Link className={classes.title} to="/">
                Trellio
              </Link>
            </Typography>
            <LoginSignupButtons />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}

export default withStyles(styles)(LoggedOutHeader);
