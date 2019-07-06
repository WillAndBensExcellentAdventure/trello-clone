import React from "react";
import { withStyles, Typography, Button } from "@material-ui/core";

const styles = ({ breakpoints, palette }) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    // margin: "0.5rem",
    alignItems: "center"
  },
  header: {
    margin: "auto",
    color: "white",
    fontSize: "2.6rem",
    lineHeight: "3rem"
  },
  subheader: {
    marginTop: "1rem",
    color: "white",
    lineHeight: "2.1rem",
    fontSize: "1.3rem",
    letterSpacing: "0.15rem",
    textAlign: "left"
  },
  button: {
    backgroundColor: "#61bd4f",
    width: "60%",
    height: "3.5rem",
    marginTop: "1rem"
  },
  image: {
    height: "90%",
    alignSelf: "center"
  }
});

function One(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div style={{ textAlign: "left", width: "39%" }}>
        <Typography className={classes.header} variant="h3">
          <b>
            {/* charlie display */}
            Trellio lets you work more collaboratively and get more done.
          </b>
        </Typography>
        <Typography className={classes.subheader} variant="h5">
          Trellio’s boards, lists, and cards enable you to organize and
          prioritize your projects in a fun, flexible, and
          <br />
          rewarding way.
        </Typography>
        <Button variant="contained" className={classes.button}>
          Sign Up - It's Free!
        </Button>
      </div>
      <img
        className={classes.image}
        alt="People working on charts"
        src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg"
      />
    </div>
  );
}

export default withStyles(styles)(One);
