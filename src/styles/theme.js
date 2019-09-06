import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ef5e91',
      light: '#ff91c1',
      dark: '#b92864'
    },
    secondary: {
      main: '#bcbcbc',
      light: '#ffffff',
      dark: '#444'
    },
    status: {
      danger: 'orange',
    },
  },
  typography: {
    fontFamily: 'Apercu Mono Regular',
  },
});

export default theme;