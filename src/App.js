import React from "react";
import { connect } from "react-redux";
import { View, StatusBar } from "react-native";
import PageTransition from "react-router-page-transition";
import EStyleSheet from "react-native-extended-stylesheet";
import { Modal } from "@material-ui/core";

import { Title, SubTitle } from "./components/Text";
import { exampleAction } from "./redux/actions/exampleAction";
import { Router, Switch, Route } from "./routers/Routing.web";
import {
  HomePage,
  GlobalMenu,
  SkipTutorial,
  AboutArtist,
  AboutArtwork,
  ScanQRCode,
  AdminLogin,
  AdminEditArtwork,
  AdminDashboard,
  SearchArtwork
} from "./views";

const styles = EStyleSheet.create({
  appView: {
    flex: 1,
    backgroundColor: "$primaryGray"
  }
});

// EStyleSheet didn't work for modal :(
const stylesObj = {
  modalDiv: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    backgroundColor: "white",
    outline: "none",
    boxShadow: ["0 10px 20px rgba(0,0,0,0.19)", "0 6px 6px rgba(0,0,0,0.23)"],
    width: "80%",
    padding: 20
  }
};

export class App extends React.Component {
  state = {
    modalOpen: window.innerWidth > 500
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
    this.setState({
      modalOpen: window.innerWidth > 500
    });
  };

  render() {
    return (
      <View style={styles.appView}>
        {/* MODAL FOR DESKTOP VIEW */}
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.modalOpen}
          onClose={() => {
            this.setState({ modalOpen: false });
          }}
        >
          <div style={stylesObj.modalDiv}>
            <Title>Please Note:</Title>
            <SubTitle style={{ lineHeight: 2 }}>{"\n\n"}</SubTitle>
            <SubTitle>
              This site is not optimized for Desktop. Please visit on a mobile
              device for a better experience.
            </SubTitle>
          </div>
        </Modal>

        {/* ROUTES */}
        <Router style={{ flex: 1 }}>
          <Route
            style={{ flex: 1 }}
            render={({ location }) => {
              if (
                location.pathname === "/" ||
                location.pathname === "/global-menu"
              ) {
                return (
                  <PageTransition timeout={500} style={{ flex: 1 }}>
                    <Switch
                      location={location}
                      hideNavBar={true}
                      style={{ flex: 1 }}
                    >
                      <Route exact path="/" component={HomePage} />
                      <Route path="/global-menu" component={GlobalMenu} />
                    </Switch>
                  </PageTransition>
                );
              } else {
                return (
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
                    {/* <Route
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
                    {!isMobile && <Redirect to="/desktop-redirect" />} */}

                    {/* USER-FACING VIEWS */}

                    <Route path="/skip-tutorial" component={SkipTutorial} />
                    <Route path="/about-artist" component={AboutArtist} />
                    <Route path="/artworks/:artName" component={AboutArtwork} />
                    <Route path="/camera" component={ScanQRCode} />
                    <Route path='/search' component={SearchArtwork} />
                  </Switch>
                );
              }
            }}
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
