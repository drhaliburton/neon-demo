import React from 'react';
import { Route } from 'react-router-dom'
import LandingPage from './views/LandingPage.js';
import LoginPage from './views/LoginPage.js';
import WelcomePage from './views/WelcomePage.js';
import './styles/App.css';

function App(props) {
  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/welcome" component={WelcomePage} />
    </>
  )
};

export default App;