import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import LandingPage from './views/LandingPage.js';
import LoginPage from './views/LoginPage.js';
import WelcomePage from './views/WelcomePage.js';

import './styles/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authorized: false
    };
  }

  render() {
    const setAuthorized = (isAuthed) => {
      this.setState({ authorized: isAuthed })
    }

    return (
      <>
        <Switch>
          <Route exact path="/login" render={() => <LoginPage setAuthorized={setAuthorized} />} />
          <Route exact path="/welcome" render={() => {
            return this.state.authorized
              ? <WelcomePage />
              : <Redirect to='/login' />
          }
          } />
          <Route path="*" component={LandingPage} />
        </Switch>
      </>
    )
  }
};


export default App;