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
    firebaseAppAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        props.openModal(`Welcome back! Click below to get started.`, 'success');
      })
      .catch(err => {
        props.openModal(`${err.message} Please try again.`, 'error');
      })
  }
  const handleFbAuth = () => {
    props.signInWithFacebook()
      .then(res => {
        if (res) {
          props.openModal(`Welcome back, ${res.user.displayName}!`, 'success');
        }
      })
      .catch(err => {
        props.openModal(`There was an issue with your request. Please try again.`, 'error');
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

