import React, { memo } from "react";
import { Autocomplete, NavigationBar } from "../../components";
import { useHome } from "./Home.utils";
import "./Home.scss";

const Home = () => {
  const { darkMode, setDarkMode } = useHome();

  return (
    <div className={darkMode ? "home-container dark-mode" : "home-container"}>
      <NavigationBar setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className="autocomplete-wrapper">
        <Autocomplete darkMode={darkMode} />
      </div>
    </div>
  );
};

export default memo(Home);
