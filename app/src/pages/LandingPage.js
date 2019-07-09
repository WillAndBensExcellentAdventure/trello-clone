import React from "react";
import { withStyles } from "@material-ui/core";
import Billboard from "../components/Billboard";
import One from "../components/landing-page-spotlights/One";

const styles = ({ breakpoints }) => ({
  root: {},
  center: {
    position: "relative",
    width: "86%",
    margin: "auto",
    textAlign: "center",
    paddingTop: "7rem",
    [breakpoints.up("md")]: {
      width: "75%"
    },
    [breakpoints.up("lg")]: {
      width: "60%"
    }
  }
});

function LandingPage(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Billboard />
      <div className={classes.center}>
        <One />
      </div>
    </div>
  );
}

export default withStyles(styles)(LandingPage);
