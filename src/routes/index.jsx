import React, { memo } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Landing from "../containers/landing/Landing";
import Home from "../containers/home/Home";
import NotFound from "../containers/not-found/NotFound";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default memo(Routes);
