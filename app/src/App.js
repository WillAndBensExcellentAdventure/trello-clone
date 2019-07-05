import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Layout from "./util/Layout";
// import Axios from 'axios';
import Auth from "./util/Auth";
import LoginForm from "./components/LoginForm";
import Billboard from "./components/Billboard";
import LandingPage from "./pages/LandingPage";
import { UserProvider } from "./util/UserContext";

class App extends PureComponent {
  renderJunk() {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(<h1>{`Tittle ${i}`}</h1>);
    }
    return arr;
  }

  render() {
    return (
      <Layout>
        <UserProvider>
          <Switch>
            <Route path="/signup" component={SignUpForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/" component={LandingPage} />
            {/* {this.renderJunk()} */}
          </Switch>
        </UserProvider>
      </Layout>
    );
  }
}

export default App;
