import React, { PureComponent } from 'react';
import {
  CssBaseline,
  Typography,
  AppBar,
} from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SignUpForm from './components/SignUpForm';
import theme from './util/Theme';
import Header from './components/Header';


class App extends PureComponent {
  renderJunk() {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(<h1>{`Tittle ${i}`}</h1>);
    }
    return arr;
  }

  render() {
    return (
      <CssBaseline>
        <MuiThemeProvider theme={theme}>
          <div>
            <Header />
            <SignUpForm />
            {
              this.renderJunk()
            }
          </div>
        </MuiThemeProvider>
      </CssBaseline>
    );
  }
}

export default App;
