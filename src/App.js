import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import PageTransition from "react-router-page-transition";
import EStyleSheet from "react-native-extended-stylesheet";
import { Modal } from "@material-ui/core";

import { isMobileDevice } from "./util/mobile";
import { Title, SubTitle } from "./components/Text";
import { changeHeight } from "./redux/actions/changeHeight";
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
  InfoPage,
  Page404,
  Search
} from "./views";

const styles = EStyleSheet.create({
  appView: {
    backgroundColor: "$primaryGray",
    height: "100%",
    flex: 1
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
    modalOpen: this.shouldModalOpen(),
    viewHeight: window.innerHeight
    // viewHeight: Dimensions.get("window").height
  };

  handleWindowSizeChange = () => {
    this.setState({
      modalOpen: this.shouldModalOpen()
    });
    this.updateViewHeight();
  };

  updateViewHeight = () => {
    // get height once and save it
    let viewHeight = `${window.innerHeight}px`;
    if (window.innerWidth > 800) viewHeight = "100vh";

    this.props.changeHeight(viewHeight);
    document.documentElement.style.setProperty("--view-height", viewHeight);
  };

  componentDidMount() {
    this.updateViewHeight();
  }

  componentWillMount() {
    document.title = "BAMPFA - Hans Hofmann Exhibit";
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  shouldModalOpen() {
    return window.innerWidth > 500 && !isMobileDevice();
  }

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
        <Router>
          <Route
            render={({ location }) => {
              // workaround for page transition (only active on these pages)
              if (
                location.pathname === "/" ||
                location.pathname === "/global-menu"
              ) {
                return (
                  <PageTransition timeout={500} style={{ flex: 1 }}>
                    <Switch location={location}>
                      <Route exact path="/" component={HomePage} />
                      <Route path="/global-menu" component={GlobalMenu} />
                    </Switch>
                  </PageTransition>
                );
              } else {
                return (
                  <Switch location={location}>
                    {/* Place all views and their URLs here */}
                    {/* ADMIN ITEMS WORK ON ALL DEVICES */}
                    <Route path="/admin" component={AdminLogin} />
                    <Route path="/admin-dashboard" component={AdminDashboard} />
                    <Route
                      path="/admin-edit-artwork/:urlName"
                      component={AdminEditArtwork}
                    />

                    {/* USER-FACING VIEWS */}
                    <Route path="/skip-tutorial" component={SkipTutorial} />
                    <Route path="/about-artist" component={AboutArtist} />
                    <Route path="/artworks/:artName" component={AboutArtwork} />
                    <Route path="/camera" component={ScanQRCode} />
                    <Route path="/info" component={InfoPage} />
                    <Route path="/search" component={Search} />
                    <Route component={Page404} />
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
  ...state
});

// dispatch actions
const bindActions = dispatch => ({
  changeHeight: data => dispatch(changeHeight(data))
});

export default connect(
  mapStateToProps,
  bindActions
)(App);
