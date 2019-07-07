import React, { useContext } from "react";
import AddIcon from "@material-ui/icons/Add";
import InfoIcon from "@material-ui/icons/Info";
import BellIcon from "@material-ui/icons/Notifications";
import { Button, withStyles, Avatar, Typography } from "@material-ui/core";
import userContext from "../../util/UserContext";

const styles = ({ breakpoints }) => ({
  root: {
    display: "flex",
    marginRight: "0.3rem"
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
  avatar: {
    height: "32px",
    width: "32px",
    margin: "auto"
  },
  usernameText: {
    margin: "auto",
    height: "32px",
    padding: 0,
    color: "black",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    lineHeight: "29px"
  }
});

function RightHandNav(props) {
  const { classes } = props;
  const UserContext = useContext(userContext);
  return (
    <div className={classes.root}>
      <Button size="small" className={classes.button}>
        <AddIcon className={classes.icon} />
      </Button>
      <Button size="small" className={classes.button}>
        <InfoIcon className={classes.icon} />
      </Button>
      <Button size="small" className={classes.button}>
        <BellIcon className={classes.icon} />
      </Button>
      <Avatar className={classes.avatar}>
        <Typography
          className={classes.usernameText}
          align="center"
          variant="h6"
          gutterBottom
        >
          {UserContext.state.username.slice(0, 2)}
        </Typography>
      </Avatar>
    </div>
  );
}

export default withStyles(styles)(RightHandNav);
