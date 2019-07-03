import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Layout from "./util/Layout";
// import Axios from 'axios';
import Auth from "./util/Auth";
import LoginForm from "./components/LoginForm";
import Billboard from "./components/Billboard";
import LandingPage from "./pages/LandingPage";

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
        <Switch>
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/" component={LandingPage} />
          {/* {this.renderJunk()} */}
        </Switch>
      </Layout>
    );
  }
}

export default App;
