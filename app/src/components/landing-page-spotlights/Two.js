import React from "react";
import { withStyles, Typography, Button } from "@material-ui/core";

const styles = ({ breakpoints, palette }) => ({});

function Two() {
  return (
    <div className={classes.root}>
      <div style={{ textAlign: "left", width: "39%" }}>
        <Typography className={classes.header} variant="h3">
          <b>
            {/* charlie display */}
            Work with any team
          </b>
        </Typography>
        {/* charlie text */}
        <Typography className={classes.subheader} variant="h5">
          Whether it’s for work, a side project or even the next family
          vacation, Trello helps your team stay organized.
        </Typography>
        <Button variant="contained" className={classes.button}>
          Start doing ->
        </Button>
      </div>
      {/* linear-gradient(#3EB9DE, #3A80DE); */}
    </div>
  );
}

export default withStyles(styles)(Two);
