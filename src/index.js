import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import * as serviceWorker from './scripts/serviceWorker';
import App from './App';

import './styles/index.css';
import './assets/fonts/apercu-mono-regular-pro.ttf'
import './assets/fonts/apercu-mono-bold-pro.ttf'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './styles/theme.js';

const app = (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
)

ReactDOM.render(
  app,
  document.querySelector('#root'),
);

// serviceWorker.register();

