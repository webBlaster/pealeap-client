import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let handleRedirect = (props) => {
    if (rest.isAuthenticated) {
      if (window.location.pathname !== "/settings" && !rest.isProfileUpdated) {
        return <Redirect to="settings" />;
      }
      return <Component {...props} />;
    }
    return <Redirect to="/" />;
  };

  return <Route {...rest} render={handleRedirect} />;
};

export default PrivateRoute;
