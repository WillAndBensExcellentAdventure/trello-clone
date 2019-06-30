import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, useScrollTrigger, withStyles,
} from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
};

function Header(props) {
  function ElevationScroll(props) {
    const trigger = useScrollTrigger({
      threshold: 0,
    });

    return React.cloneElement(props.children, {
      elevation: trigger ? 4 : 0,
      color: trigger ? 'white' : 'primary'
    });
  }
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Typography className={classes.title}>Trellio</Typography>
            <Button>Login</Button>
            <Button variant="contained" color="secondary">Signup</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

    </div>
  );
}

export default withStyles(styles)(Header);
