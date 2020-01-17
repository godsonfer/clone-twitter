import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";

/**
 * TODO:: components
 *
 * IMPORT NEEDED COMPONENTS
 */

import App from "./App";
import Login from "./components/Pages/Auth/Login";
import Register from "./components/Pages/Auth/Register";
import HeaderComponent from "./components/Header/Header";
import Home from "./components/Pages/Welcome/Home";

/**
 * TODO:: reducers
 * IMPORT ALL REDUCER ROOT, PROVIDER...
 */

import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import reducersRoot from "./Redux/reducer.redux";
import { setCurrentUser } from "./Redux/actions.redux";
import { composeWithDevTools } from "redux-devtools-extension";

/**
 * TODO::  react Router
 * IMPORT ALL ROUTER PACKAGES
 */

import {
  Route,
  withRouter,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

// firebase
import firebaseUtils from "./firesbase/firebase.utils";

// semantic UI- React stoffs

import "semantic-ui-css/semantic.min.css";

// react bootstrap stoffs

import "bootstrap/dist/css/bootstrap.min.css";

// app index
import * as serviceWorker from "./serviceWorker";
import Welcome from "./components/Pages/Welcome/Welcome";
import { Dimmer, Loader } from "semantic-ui-react";

const store = createStore(reducersRoot, composeWithDevTools());
class RootRouter extends React.Component {
  componentDidMount() {
    const { setCurrentUser, history } = this.props;
    firebaseUtils.auth().onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
        history.push("/index");
      } else history.push("/");
    });
  }

  render() {
    return (
      <React.Fragment>
        <HeaderComponent />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/index" component={App} />
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Register} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = action => ({
  isLoading: action.isLoading
});

const RootWithRouter = withRouter(
  connect(mapStateToProps, { setCurrentUser })(RootRouter)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithRouter />
    </Router>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
