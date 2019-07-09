import React, { useContext } from "react";
import AddIcon from "@material-ui/icons/Add";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import BellIcon from "@material-ui/icons/NotificationsOutlined";
import { Button, withStyles, Avatar, Typography } from "@material-ui/core";
import userContext from "../../util/UserContext";
import AvatarDropDownMenu from "./AvatarDropDownMenu";

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
      <AvatarDropDownMenu />
    </div>
  );
}

export default withStyles(styles)(RightHandNav);
