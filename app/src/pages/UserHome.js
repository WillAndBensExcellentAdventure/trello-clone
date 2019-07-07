import React, { useContext } from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { userContext } from "../util/UserContext";

const styles = ({ breakpoints, palette }) => ({});

function UserHome(props) {
  const UserContext = useContext(userContext);
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.boardList}>
        <Typography>{UserContext.state.username}</Typography>
            
      </div>
    </div>
  );
}

export default withStyles(styles)(UserHome);
