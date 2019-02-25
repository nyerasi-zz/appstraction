import React from "react";
import { connect } from "react-redux";
import { View, StatusBar } from "react-native";
import PageTransition from "react-router-page-transition";
import EStyleSheet from "react-native-extended-stylesheet";

import { exampleAction } from "./redux/actions/exampleAction";
import { Router, Switch, Route, Redirect } from "./routers/Routing.web";
import {
  HomePage,
  GlobalMenu,
  SkipTutorial,
  AboutArtist,
  AboutArtwork,
  ScanQRCode,
  AdminLogin,
  AdminEditArtwork,
  AdminDashboard
} from "./views";

const styles = EStyleSheet.create({
  appView: {
    flex: 1,
    backgroundColor: "$primaryGray"
  }
});

export class App extends React.Component {
  state = {
    windowWidth: window.innerWidth
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  componentWillMount() {
    document.title = "BAMPFA - Hans Hofmann Exhibit";
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  render() {
    // const { windowWidth } = this.state;
    // const isMobile = windowWidth <= 500;
    const isMobile = true;

    return (
      <View style={styles.appView}>
        <Router style={{ flex: 1 }}>
          <Route
            style={{ flex: 1 }}
            render={({ location }) => (
              <PageTransition timeout={500} style={{ flex: 1 }}>
                <Switch
                  location={location}
                  hideNavBar={true}
                  style={{ flex: 1 }}
                >
                  {/* Place all views and their URLs here */}

                  {/* ADMIN ITEMS WORK ON ALL DEVICES */}
                  <Route path="/admin" component={AdminLogin} />
                  <Route path="/admin-dashboard" component={AdminDashboard} />
                  <Route
                    path="/admin-edit-artwork/:urlName"
                    component={AdminEditArtwork}
                  />

                  {/* REDIRECT WHEN ON NON MOBILE DEVICE */}
                  <Route
                    path="/desktop-redirect"
                    component={() => {
                      alert(
                        "Please visit this website on a mobile device.\n" +
                          "Redirecting to Bampfa.org..."
                      );
                      window.location.href = "https://bampfa.org/";
                      return null;
                    }}
                  />
                  {!isMobile && <Redirect to="/desktop-redirect" />}

                  {/* USER-FACING VIEWS */}
                  <Route exact path="/" component={HomePage} />
                  <Route path="/global-menu" component={GlobalMenu} />
                  <Route path="/skip-tutorial" component={SkipTutorial} />
                  <Route path="/about-artist" component={AboutArtist} />
                  <Route path="/artworks/:artName" component={AboutArtwork} />
                  <Route path="/camera" component={ScanQRCode} />
                </Switch>
              </PageTransition>
            )}
          />
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
