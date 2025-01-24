import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#73270D',
      contrastText: '#FFFFFF', // White (N-95)
    },
    primaryContainer: {
      main: '#F7C6B6',
      contrasText: '#272727'
    },
    
  },
});

export default theme;