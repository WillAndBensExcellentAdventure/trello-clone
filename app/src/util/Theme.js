import { createMuiTheme } from '@material-ui/core';
import { red, blue, indigo } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0179bf",
      dark: indigo[900]
    },
    secondary: {
      main: blue[700],
    },
  },
});

export default theme;
