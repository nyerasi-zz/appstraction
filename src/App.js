import React from "react";
import { connect } from "react-redux";
import { View, StatusBar } from "react-native";
import EStylesheet from "react-native-extended-stylesheet";

import { exampleAction } from "./redux/actions/exampleAction";
import { Router, Switch, Route } from "./routers/Routing.web";
<<<<<<< HEAD
import { HomePage, GlobalMenu, SkipTutorial, AboutArtist, Timeline, Artwork } from "./views";
=======
import {
  HomePage,
  GlobalMenu,
  SkipTutorial,
  AboutArtist,
  AboutArtwork,
  ScanQRCode
} from "./views";

const styles = EStylesheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "$primaryGray"
  }
});
>>>>>>> 1ef012f1152858b657936300271fec1a536bfec9

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
<<<<<<< HEAD
            <Route path="/timeline" component={Timeline} />
            <Route path="/artwork" component={Artwork} />
=======
            <Route path="/artworks/:artName" component={AboutArtwork} />
            <Route path="/camera" component={ScanQRCode} />
>>>>>>> 1ef012f1152858b657936300271fec1a536bfec9
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
