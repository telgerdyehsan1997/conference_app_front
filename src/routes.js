import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./layouts/NotFound";
import Base from "./layouts/Base";
import Auth from "./layouts/Auth";
import Dashboard from "./components/Dashboard/index";

const isLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) {
    return true;
  } else {
    return false;
  }

  return false;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() === true ? (
          <Base content={<Component {...props} />} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const AppRouter = () => (
  <Switch>
    <Route exact path="/login" render={() => <Auth />} />
    <PrivateRoute exact path="/" component={Dashboard} />
    <Route render={() => <Base content={<NotFound />} />} />
  </Switch>
);

export default AppRouter;
