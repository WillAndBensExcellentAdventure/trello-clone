import React from "react";
import { AppBar, Toolbar, withStyles, Typography } from "@material-ui/core";
import LeftHandNav from "./LeftHandNav";

const styles = ({ breakpoints }) => ({
  root: {
    // height: "40px"
    flexGrow: 1
  },
  toolBar: {
    minHeight: "32px",
    flexGrow: 1,
    justifyContent: "space-between"
  }
});

function LoggedInHeader(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar disableGutters className={classes.toolBar} variant="dense">
          <LeftHandNav />
          <Typography variant="subtitle1">Trellio</Typography>
          {/* <CreateInfoNotiAvatar /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(LoggedInHeader);
