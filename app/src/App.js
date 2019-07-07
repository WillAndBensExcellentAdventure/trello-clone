import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Layout from "./util/Layout";
import LoginForm from "./components/LoginForm";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import userContext from "./util/UserContext";
import Auth from "./util/Auth";

function App() {
  const UserContext = useContext(userContext);

  function verifyLoginStatus() {
    if (!UserContext.state.isLoggedIn) {
      Auth.isLoggedIn(response => {
        if (response.isLoggedIn) {
          UserContext.dispatch({
            type: "loginSuccess",
            payload: {
              isLoggedIn: response.isLoggedIn,
              username: response.username
            }
          });
        }
      });
    }
  }

  verifyLoginStatus();

  function renderJunk() {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(<h1>{`Tittle ${i}`}</h1>);
    }
    return arr;
  }

  return (
    <Layout>
      <Switch>
        <Route path="/signup" component={SignUpForm} />
        <Route path="/login" component={LoginForm} />
        <Route exact path="/" component={LandingPage} />
        <Route path="/:username/dashboard/" component={Dashboard} />
        {/* {this.renderJunk()} */}
      </Switch>
    </Layout>
  );
}

export default App;
