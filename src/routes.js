import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./layouts/NotFound";
import Base from "./layouts/Base";
import Auth from "./layouts/Auth";

const isLoggedIn = () => {
  // const user = JSON.parse(localStorage.getItem("user"));
  // if (user && user.accessToken) {
  //   return true;
  // } else {
  //   return false;
  // }

  return true;
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
    {/* <PrivateRoute exact path="/tasks" component={TaskList} /> */}
    <Route render={() => <Base content={<NotFound />} />} />
  </Switch>
);

export default AppRouter;
