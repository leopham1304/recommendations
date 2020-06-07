import React, { memo } from "react";
import { useHandleButtonClicked } from "./Landing.utils";
import "./Landing.scss";

const Landing = () => {
  const handleButtonClicked = useHandleButtonClicked();

  return (
    <div className="landing-container">
      <div className="introduction-wrapper">
        <h1>Hello, welcome to Vietnam!</h1>
        <div className="introduction-text">
          <p>Vietnam is a country divided into 58 provinces</p>
          <p>There are many heavenly breathtaking landscapes to explore</p>
        </div>
        <button onClick={handleButtonClicked} className="landing-button">
          Fly me to the <strong> Moon </strong>
        </button>
      </div>
    </div>
  );
};

export default memo(Landing);
