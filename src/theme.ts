import { ThemeOptions, createTheme } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#ca5e5c',
          "&:hover":{
                backgroundColor: '#f50057'
            },
        },
      },
    },
  },
  palette: {
    mode: 'light',    
  },
};

export const theme = createTheme(themeOptions);