import React from "react";
import { AppBar, Toolbar, withStyles } from "@material-ui/core";
import LeftHandNav from "./LeftHandNav";

const styles = ({ breakpoints }) => ({
  root: {
    // height: "40px"
  },
  toolBar: {
    minHeight: "32px"
  }
});

function LoggedInHeader(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar disableGutters className={classes.toolBar} variant="dense">
          <LeftHandNav />
          {/* Trellio */}
          {/* <CreateInfoNotiAvatar /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(LoggedInHeader);
