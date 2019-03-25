import React from "react";
import { connect } from "react-redux";
import { View, ScrollView } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import screenfull from "screenfull";

import { BackHeader } from "../components/Headers";
import { QRCamera } from "../components/Camera";
import { FullWidthImage } from "../components/Images";
import { Title, SubTitle } from "../components/Text";

const styles = EStyleSheet.create({
  cameraView: {
    backgroundColor: "$primaryGray"
  },
  errorView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "10%",
    backgroundColor: "$primaryGray",
    paddingTop: 50,
    paddingBottom: 80
  }
});

class ScanQRCode extends React.Component {
  constructor(props) {
    super(props);
    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);

    this.state = {};
  }

  handleScan(data) {
    console.log(data);
    if (data) {
      this.setState({ scannedData: data });
      let urlSuffixes = ["now.sh", "herokuapp.com"];

      let index,
        found = false;

      // see if there's a match with the scanned URL
      for (var i = 0; i < urlSuffixes.length; i++) {
        const urlSuffix = urlSuffixes[i];

        if ((index = data.indexOf(urlSuffix)) !== -1) {
          let path = data.substring(index + urlSuffix.length);
          found = true;
          this.props.history.push(path);
          break;
        }
      }

      if (!found) {
        window.location.replace(data);
      }
    }
  }

  handleError(err) {
    console.log(err);
    this.setState({
      errorName: err.name,
      errorMessage: err.message
    });
  }

  renderErrorView = (title, subtitle) => (
    <View style={styles.errorView}>
      <Title style={{ textAlign: "center", fontSize: "2.5rem" }}>{title}</Title>
      <SubTitle style={{ textAlign: "center", fontSize: "1.4rem" }}>
        {subtitle}
      </SubTitle>
    </View>
  );

  render() {
    // CAMERA VIEW
    let viewToRender = (
      <View style={styles.cameraView}>
        <QRCamera handleScan={this.handleScan} handleError={this.handleError} />
      </View>
    );

    // ERROR VIEW
    if (this.state.errorName) {
      // NON IOS 11 / WRONG BROWSER
      if (this.state.errorName === "NoVideoInputDevicesError") {
        viewToRender = this.renderErrorView(
          "Sorry! Your browser is not compatible.",
          <p>
            <b>Android users:</b> Please make sure you're using <b>Chrome</b>.
            {"\n\n"}
            <b>iPhone users:</b> Please make sure you're using <b>Safari</b>,
            and that you're running <b>iOS 11 or higher</b>.{"\n\n"}
            To experience this exhibit another way, please visit the{" "}
            <b>
              <a href="/search">artwork search page</a>
            </b>
            .
          </p>
        );
      }

      // NON HTTP ERROR
      else if (
        window.location.href.startsWith("http://") &&
        !window.location.href.startsWith("http://localhost")
      ) {
        viewToRender = this.renderErrorView(
          "Please enable HTTPS",
          <p>
            Unfortunately the camera will not work if HTTPS is not enabled.{" "}
            <b>
              <a
                href={window.location.href.replace("http://", "https://")}
                onClick={screenfull.request}
              >
                Click here to visit this site with HTTPS.
              </a>
            </b>
          </p>
        );
      }

      // GENERIC ERROR
      else {
        viewToRender = this.renderErrorView(
          "An error has occurred.",
          <p>
            We couldn't access the device's camera because:{" "}
            <b>{this.state.errorMessage}</b>
            {"\n\n"}
            Please refresh this page to try again.
          </p>
        );
      }
    }

    return (
      <View
        style={{
          flex: 1,
          height: this.props.heightChanged.height || "initial"
        }}
        className="back-item"
      >
        <BackHeader />
        <ScrollView
          bounces={false}
          style={{ flex: 1, backgroundColor: "#01a7b7" }}
        >
          {viewToRender}

          <View
            style={{
              flex: 1,
              zIndex: -1
            }}
          >
            <FullWidthImage
              source={require("../assets/tutorial/Tutorial.png")}
              width={1000}
              height={816}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(ScanQRCode);
