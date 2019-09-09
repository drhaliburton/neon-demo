import React from 'react';
import Btn from './Button.js';
import fbIcon from '../../assets/icon-facebook.png';
import twitterIcon from '../../assets/icon-twitter.png';

const SocialLogin = (props) => {
  return (
    <>
      <div className="fb-btn" onClick={props.handleFbAuth}>
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
    </>
  )
};

export default SocialLogin;