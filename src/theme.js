import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#037293',
    },
    secondary: {
      main: '#07CD57',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
