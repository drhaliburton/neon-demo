import React from 'react';
import Btn from './components/Button.js';
import FixedBgImage from './components/FixedBgImage';
import TopBar from './components/TopBar';
import shoe1 from '../assets/shoe1.jpg';

const LandingPage = () => {
  return (
    <>
      <div className="page-container">
        <TopBar icon="close" linkTo="/login" />
        <div className="content-container fade-in">
          <FixedBgImage image={shoe1} color="#E8E8E8" />
          <h1>Welcome Back!</h1>
          <h2>Click below to get started.</h2>
          <Btn text="View Store" color="primary" />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
