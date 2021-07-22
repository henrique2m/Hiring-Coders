import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";

const Router = () => {
  return (
    <Switch>
      <Route path={["", "/"]} exact component={Home} />
      <Route path="/signIn" component={SignIn} />
    </Switch>
  );
};

export default Router;
