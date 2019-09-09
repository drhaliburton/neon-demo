import React from 'react';;

function LandingPage(props) {
  const imageStyle = {
    boxShadow: `-60px -50px ${props.color}`,
  }
  return (
    <>
      <img
        className="bg-image"
        src={props.image}
        alt=""
        style={imageStyle} />
    </>
  );
}

export default LandingPage;
