import React from 'react';
import Btn from './components/Button.js';
import LoginForm from './components/LoginForm.js';
import TopBar from './components/TopBar.js';
import fbIcon from '../assets/icon-facebook.png';
import twitterIcon from '../assets/icon-twitter.png';

function LoginPage(props) {
  return (
    <div className="page-container">
      <TopBar icon="arrow_back" linkTo="/" />
      <div className="content-container scale-up-center">
        <LoginForm />
        <div className="fb-btn">
          <Btn
            text="Sign In With Facebook"
            color="primary"
            icon={<img src={fbIcon}
              alt="Facebook" />}
          />
        </div>
        <div className="twitter-btn">
          <Btn
            text="Sign In With Twitter"
            color="primary"
            icon={<img src={twitterIcon}
              alt="Twitter" />}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;