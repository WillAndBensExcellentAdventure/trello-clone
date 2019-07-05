import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import theme from "./util/Theme";
import { UserProvider } from "./util/UserContext";

import App from "./App";

ReactDOM.render(
  <CssBaseline>
    <MuiThemeProvider theme={theme}>
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </MuiThemeProvider>
  </CssBaseline>,

  document.getElementById("app")
);

module.hot.accept();
