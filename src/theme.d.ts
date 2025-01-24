declare module '@mui/material/styles' {
    interface Palette {
      primaryContainer: Palette['primary'];
    }
  
    interface PaletteOptions {
      primaryContainer?: PaletteOptions['primary'];
    }
  }