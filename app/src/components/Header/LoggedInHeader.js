import React, { useContext } from "react";
import { AppBar, Toolbar, withStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import LeftHandNav from "./LeftHandNav";
import RightHandNav from "./RightHandNav";
import userContext from "../../util/UserContext";

const styles = ({ breakpoints }) => ({
  root: {
    // height: "40px"
    flexGrow: 1
  },
  toolBar: {
    minHeight: "32px",
    flexGrow: 1,
    justifyContent: "space-between"
  },
  title: {
    textDecoration: "none",
    color: "#FFF",
    position: "absolute",
    top: "0.25rem"
  }
});

function LoggedInHeader(props) {
  const { classes } = props;
  const UserContext = useContext(userContext);
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar disableGutters className={classes.toolBar} variant="dense">
          <LeftHandNav />

          <Typography variant="h6">
            <Link
              className={classes.title}
              to={`/${UserContext.state.username}/boards`}
            >
              Trellio
            </Link>
          </Typography>

          <RightHandNav />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(LoggedInHeader);
