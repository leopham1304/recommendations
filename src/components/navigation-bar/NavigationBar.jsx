import React, { memo } from "react";
import "./NavigationBar.scss";

export const NavigationBar = ({ onSwitchMode }) => {
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
        <span>Become a host</span>
        <span>Help</span>
        <span>Sign up</span>
        <span>Log in</span>
      </div>
    </nav>
  );
};

export default memo(NavigationBar);
