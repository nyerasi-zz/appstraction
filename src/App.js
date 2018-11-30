import React from "react";
import { connect } from "react-redux";
import { View, StatusBar } from "react-native";
import EStylesheet from "react-native-extended-stylesheet";

import { exampleAction } from "./redux/actions/exampleAction";
import { Router, Switch, Route } from "./routers/Routing.web";
import {
  HomePage,
  GlobalMenu,
  SkipTutorial,
  AboutArtist,
  AboutArtwork,
  ScanQRCode,
  Timeline
} from "./views";

const styles = EStylesheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "$primaryGray"
  }
});
export class App extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Router>
          <Switch hideNavBar={true}>
            {/* Place all views and their URLs here */}
            <Route exact path="/" component={HomePage} />
            <Route path="/global-menu" component={GlobalMenu} />
            <Route path="/skip-tutorial" component={SkipTutorial} />
            <Route path="/about-artist" component={AboutArtist} />
            <Route path="/timeline" component={Timeline} />
            <Route path="/artworks/:artName" component={AboutArtwork} />
            <Route path="/camera" component={ScanQRCode} />
          </Switch>
        </Router>
      </View>
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

export default connect(
  mapStateToProps,
  bindActions
)(App);
