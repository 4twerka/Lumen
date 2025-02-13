import { createTheme } from '@mui/material';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#73270D',
      contrastText: '#FFFFFF', // White (N-95)
    },
    secondary: {
      main: '#0E402D'
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default theme;