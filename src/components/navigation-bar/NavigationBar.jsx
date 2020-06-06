import React, { memo } from "react";
import "./NavigationBar.css";

export const NavigationBarComponent = ({ onSwitchMode }) => {
  return (
    <nav className="nav-container">
      <div>
        <img
          className="airbnb-logo"
          src={require("../../assets/images/airbnb.svg")}
          alt="AirBnB Logo"
        />
      </div>
      <div className="nav-menu">
        <a href="#">Become a host</a>
        <a href="#">Help</a>
        <a href="#">Sign up</a>
        <a href="#">Log in</a>
      </div>
    </nav>
  );
};

const NavigationBar = memo(NavigationBarComponent);
NavigationBar.displayName = "NavigationBar";

export default NavigationBar;
