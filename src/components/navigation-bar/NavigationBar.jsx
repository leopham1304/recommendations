import React, { memo } from "react";
import PropTypes from "prop-types";
import "./NavigationBar.scss";

export const NavigationBar = ({ setDarkMode, darkMode }) => {
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
        <span className="toggle">
          <input
            checked={darkMode}
            onChange={() => setDarkMode((prevMode) => !prevMode)}
            id="checkbox"
            className="checkbox"
            type="checkbox"
          />
          <label htmlFor="checkbox" />
        </span>
        <span>Become a host</span>
        <span>Help</span>
        <span>Sign up</span>
        <span>Log in</span>
      </div>
    </nav>
  );
};

NavigationBar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default memo(NavigationBar);
