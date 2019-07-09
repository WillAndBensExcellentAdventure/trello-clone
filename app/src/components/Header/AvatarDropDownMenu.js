import React, { useState, useContext } from "react";
import {
  Menu,
  Avatar,
  Typography,
  withStyles,
  Divider,
  MenuItem
} from "@material-ui/core";
import userContext from "../../util/UserContext";
import Auth from "../../util/Auth";

const styles = ({ breakpoints, palette }) => ({
  avatar: {
    height: "32px",
    width: "32px",
    margin: "auto"
  },
  usernameAbrv: {
    margin: "auto",
    height: "32px",
    padding: 0,
    color: "black",
    alignItems: "center",
    lineHeight: "29px"
  },
  menuPaper: {
    width: "304px"
  },
  menuList: {
    padding: 0
  },
  username: {
    textAlign: "center",
    color: "gray",
    padding: "0.25rem"
  },
  menuItem: {
    color: palette.primary.dark
  }
});

function AvatarDropDownMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const UserContext = useContext(userContext);
  const { classes } = props;

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleLogout() {
    Auth.logout(logoutSuccess => {
      if (logoutSuccess) {
        UserContext.dispatch({
          type: "userLogout",
          payload: {
            isLoggedIn: false
          }
        });
      }
    });
  }

  return (
    <React.Fragment>
      <Avatar onClick={handleClick} className={classes.avatar}>
        <Typography
          className={classes.usernameAbrv}
          align="center"
          variant="h6"
          gutterBottom
        >
          {UserContext.state.username.slice(0, 2)}
        </Typography>
      </Avatar>
      <Menu
        classes={{
          paper: classes.menuPaper,
          list: classes.menuList
        }}
        className={classes.menu}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Typography className={classes.username}>
          {UserContext.state.username}
        </Typography>
        <Divider />
        <MenuItem className={classes.menuItem}>Profile</MenuItem>
        <MenuItem className={classes.menuItem}>Cards</MenuItem>
        <MenuItem className={classes.menuItem}>Settings</MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default withStyles(styles)(AvatarDropDownMenu);
