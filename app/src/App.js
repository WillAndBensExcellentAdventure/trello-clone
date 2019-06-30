import React, { PureComponent } from "react";
import {
  CssBaseline,
  createMuiTheme,
  Typography,
  AppBar
} from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { red, amber } from "@material-ui/core/colors";
import SignUpForm from "./components/SignUpForm";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: amber[500]
    },
    secondary: {
      main: red[500]
    }
  }
});

class App extends PureComponent {
  render() {
    return (
      <CssBaseline>
        <MuiThemeProvider theme={theme}>
          <div>
            <AppBar color="primary" position="static">
              <Typography variant="h2">This also works</Typography>
            </AppBar>
            <SignUpForm />
          </div>
        </MuiThemeProvider>
      </CssBaseline>
    );
  }
}

export default App;
