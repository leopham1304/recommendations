import React, { memo } from "react";
import { Autocomplete } from "../../components";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Autocomplete />
    </div>
  );
};

export default memo(Home);
