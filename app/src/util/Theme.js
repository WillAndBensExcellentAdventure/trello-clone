import { createMuiTheme } from '@material-ui/core';
import { red, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0179bf",
    },
    secondary: {
      main: red[500],
    },
  },
});

export default theme;
