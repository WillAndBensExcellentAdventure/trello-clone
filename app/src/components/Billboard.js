import React from "react";
import { withStyles } from "@material-ui/core";

const styles = ({ breakpoints }) => ({
  root: {
    background: "linear-gradient(to right, #0c76c0, #4669c4)",
    // backgroundColor: 'black',
    width: "100%",
    height: "600px",
    position: "absolute"
  }
});

function Billboard(props) {
  const { classes } = props;
  return <div className={classes.root} />;
}

export default withStyles(styles)(Billboard);
