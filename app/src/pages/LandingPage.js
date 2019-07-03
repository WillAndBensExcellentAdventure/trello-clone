import React from "react";
import { withStyles, Typography, Button } from "@material-ui/core";
import Billboard from "../components/Billboard";

const styles = ({ breakpoints }) => ({
  root: {},
  center: {
    position: "relative",
    width: "86%",
    margin: "auto",
    textAlign: "center",
    paddingTop: "7rem",
    // border: "1px solid black",
    [breakpoints.up("md")]: {
      width: "75%"
    },
    [breakpoints.up("lg")]: {
      width: "60%"
    }
  }
});

function LandingPage(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Billboard />
      <div className={classes.center}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // margin: "0.5rem",
            alignItems: 'center'
          }}
        >
          <div style={{ textAlign: "left", width: '39%'}}>
            <Typography
              style={{
                margin: "auto",
                color: "white",
                fontSize: "2.6rem",
                lineHeight: "3rem"
              }}
              variant="h3"
            >
              <b>
                  {/* charlie display */}
                Trellio lets you work more collaboratively and get more done.
              </b>
            </Typography>
            <Typography
              style={{
                marginTop: "1rem",
                color: "white",
                lineHeight: "2.1rem",
                fontSize: '1.3rem',
                letterSpacing: "0.15rem",
                // width: "90%",
                textAlign: "left"
              }}
              variant="h5"
            >
              Trellio’s boards, lists, and cards enable you to organize and
              prioritize your projects in a fun, flexible, and <br/> rewarding way.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#61bd4f", width: '60%', height: '3.5rem', marginTop: '1rem' }}>
              Sign Up - It's Free!
            </Button>
          </div>
          <img
            style={{ height: "90%", alignSelf: "center" }}
            alt="is"
            src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(LandingPage);
