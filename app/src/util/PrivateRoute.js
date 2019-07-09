import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import userContext from "./UserContext";

export default ({ component: Component, ...rest }) => {
  const UserContext = useContext(userContext);
  return (
    <Route
      {...rest}
      render={props => {
        if (UserContext.state.isLoggedIn) {
          return <Component props={props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};
