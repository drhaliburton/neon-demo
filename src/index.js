import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import './fonts/apercu-mono-regular-pro.ttf'
import './fonts/apercu-mono-bold-pro.ttf'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ef5e91',
      light: '#ff91c1',
      dark: '#b92864'
    },
    secondary: {
      main: '#eeeeee',
      light: '#ffffff',
      dark: '#bcbcbc'
    },
    status: {
      danger: 'orange',
    },
  },
  typography: {
    fontFamily: 'Apercu Mono Regular',
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector('#root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
