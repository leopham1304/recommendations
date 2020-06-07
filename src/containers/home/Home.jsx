import React, { memo } from "react";
import { Autocomplete, NavigationBar } from "../../components";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <NavigationBar />
      <div className="autocomplete-wrapper">
        <Autocomplete />
      </div>
    </div>
  );
};

export default memo(Home);
