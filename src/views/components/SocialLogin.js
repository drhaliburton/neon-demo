import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebaseConfig from '../../scripts/firebase.js';

import Btn from './Button.js';
import fbIcon from '../../assets/icon-facebook.png';
import twitterIcon from '../../assets/icon-twitter.png';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const SocialLogin = (props) => {
  const handleSignIn = () => {
    props.signInWithFacebook().then(res => {
      console.log(res);
      if (res) {
        props.openModal(res.user.displayName);
      }
    })
  }
  return (
    <>
      <div className="fb-btn" onClick={handleSignIn}>
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

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(SocialLogin);