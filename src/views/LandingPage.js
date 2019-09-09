import React from 'react';
import { Link } from "react-router-dom";
import Btn from './components/Button.js';

function LandingPage() {
  return (
    <>
      <div className="landing-image"></div>
      <div className="page-container landing-page">
        <div className="content-container fade-in">
          <h1>Welcome To Guilt-Free Shopping</h1>
          <Link to="/login">
            <Btn text="Start Shopping" color="primary" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
