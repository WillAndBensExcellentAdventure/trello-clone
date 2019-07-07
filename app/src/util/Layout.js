import React, { useContext } from "react";
import LoggedOutHeader from "../components/Header/LoggedOutHeader";
import userContext from "./UserContext";
import LoggedInHeader from "../components/Header/LoggedInHeader";

function Layout(props) {
  const UserContext = useContext(userContext);

  function renderHeader() {
    if (UserContext.state.isLoggedIn) {
      return <LoggedInHeader />;
    }
    return <LoggedOutHeader />;
  }

  return (
    <div>
      {renderHeader()}
      {props.children}
    </div>
  );
}

export default Layout;
