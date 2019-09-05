import React from 'react';
import { Route } from 'react-router-dom'
import LandingPage from './views/LandingPage.js';
import LoginPage from './views/LoginPage.js';
import './styles/App.css';

function App() {
  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={LoginPage} />
    </>
  );
}

export default App;


