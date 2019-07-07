import React from "react";
import { Button, Typography, withStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import classnames from "classnames";

const styles = ({ breakpoints }) => ({
  root: {
    marginLeft: "0.3rem"
  },
  button: {
    color: "white",
    backgroundColor: "hsla(0,0%,100%,.3)",
    minWidth: 0,
    marginRight: "0.5rem",
    margin: "0.15rem 0 0.15rem 0",
    lineHeight: "32px",
    padding: "0.1rem 0.2rem 0.1rem 0.2rem",
    height: "32px"
  },
  icon: {
    width: "32px",
    lineHeight: "32px"
  },
  text: {
    lineHeight: "32px"
  }
});

function LeftHandNav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Button size="small" className={classes.button}>
        <HomeIcon className={classes.icon} />
      </Button>
      <Button size="small" className={classes.button}>
        <Typography gutterBottom className={classes.text} variant="subtitle1">
          Boards
        </Typography>
      </Button>
    </div>
  );
}

export default withStyles(styles)(LeftHandNav);
