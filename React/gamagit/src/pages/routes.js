import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Repositories from "./Repositories";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/repositories" component={Repositories} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
