import React from "react";
import { List, ListItem, Typography } from "@material-ui/core";

function HomeSidebar(props) {
  const { classes } = props;
  return (
    <div>
      <List>
        <ListItem>Boards</ListItem>
        <Typography variant="overline">Teams</Typography>
        {/* render subscribed teams */}
      </List>
    </div>
  );
}

export default HomeSidebar;
