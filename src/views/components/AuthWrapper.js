import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebaseConfig from '../../scripts/firebase.js';
import LoginForm from './LoginForm.js';
import SocialLogin from './SocialLogin.js';

const firebaseApp = firebase.initializeApp(firebaseConfig);


const AuthWrapper = (props) => {
  const handleAuth = ({ email, password }) => {
    console.log(email, password)
  }
  const handleFbAuth = () => {
    props.signInWithFacebook().then(res => {
      if (res) {
        props.openModal(res.user.displayName);
      }
    })
  }
  return (
    <>
      <LoginForm handleAuth={handleAuth} />
      <SocialLogin handleFbAuth={handleFbAuth} />
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
})(AuthWrapper);

