import React, { useContext } from "react";
import { Button, Typography, withStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import { Link } from "react-router-dom";
import userContext from "../../util/UserContext";

const styles = ({ breakpoints }) => ({
  root: {
    marginLeft: "0.3rem"
  },
  button: {
    color: "white",
    backgroundColor: "hsla(0,0%,100%,.3)",
    minWidth: 0,
    marginRight: "0.25rem",
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
  },
  link: {
    textDecoration: "none",
    color: "#FFF"
  }
});

function LeftHandNav(props) {
  const { classes } = props;
  const UserContext = useContext(userContext);
  return (
    <div className={classes.root}>
      <Button size="small" className={classes.button}>
        <HomeIcon className={classes.icon} />
      </Button>
      <Button size="small" className={classes.button}>
        <Typography gutterBottom className={classes.text} variant="subtitle1">
          <Link
            className={classes.link}
            to={`/${UserContext.state.username}/boards`}
          >
            Boards
          </Link>
        </Typography>
      </Button>
    </div>
  );
}

export default withStyles(styles)(LeftHandNav);
