/*
* TODO:
* - See if you can connect redux to save state across different pages! 
**/

import React from "react";
import { connect } from "react-redux";
import { StyleSheet, StatusBar } from "react-native";
import { exampleAction } from "./redux/actions/exampleAction";
import { Router, Switch, Route } from "./routers/Routing";

// custom components
import Other from "./components/Other/Other";
// import Home from "./components/Home/Home";
import HomePage from "./views/HomePage";

export class App extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  render() {
    return (
      <Router>
        <Switch hideNavBar={true}>
          {/* Place all screens and their URLs here */}
          <Route exact path="/" component={HomePage} />
          <Route path="/one" component={Other} />
        </Switch>
      </Router>
    );
  }
}

// Redux state config
const mapStateToProps = state => ({
  example: state.example
});

// dispatch actions
const bindActions = dispatch => ({
  exampleAction: () => dispatch(exampleAction())
});

export default connect(mapStateToProps, bindActions)(App);

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  appHeader: {
    flex: 1,
    // backgroundColor: "#222",
    padding: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  appIntro: {
    flex: 1,
    fontSize: 30,
    textAlign: "center",
    color: "white"
  }
});
