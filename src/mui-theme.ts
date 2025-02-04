import { createTheme } from '@mui/material';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#73270D',
      contrastText: '#FFFFFF', // White (N-95)
    },
  },
});

export default theme;