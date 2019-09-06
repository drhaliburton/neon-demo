import React from 'react';
import { Link } from "react-router-dom";
import Btn from './components/Button.js';
import shoe1 from '../assets/shoe1.jpg';

function LandingPage() {
  return (
    <div className="page-container">
      <img src={shoe1} alt="Shoe 1" />
      <div className="content-container">
        <h1>Welcome To Guilt-Free Shopping</h1>
        <Link to="/login">
          <Btn text="Start Shopping" color="primary" />
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
