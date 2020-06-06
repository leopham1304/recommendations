import React, { memo } from "react";
import Routes from "./routes";

const AppComponent = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

const App = memo(AppComponent);
App.displayName = "App";
export default App;
