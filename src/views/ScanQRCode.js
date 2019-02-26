import React from "react";
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "10%",
    backgroundColor: "$primaryGray",
    paddingTop: 50,
    paddingBottom: 80
  }
});

export default class ScanQRCode extends React.Component {
  constructor(props) {
    super(props);
    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);

    this.state = {
      errorOccurred: false,
      errorMessage: ""
    };
  }

  handleScan(data) {
    if (data) {
      let searchString = "https://bampfa.herokuapp.com";
      let index;

      if ((index = data.indexOf(searchString)) !== -1) {
        let path = data.substring(index + searchString.length);
        this.props.history.push(path);
      } else {
        this.props.history.push("artworks/invalid-qr");
      }
    }
  }

  handleError(err) {
    this.setState({
      errorOccurred: true,
      errorName: err.name,
      errorMessage: err.message
    });
  }

  render() {
    console.log(this.state.errorName);
    return (
      <View style={{ flex: 1 }} className="back-item">
        <BackHeader />
        <ScrollView style={{ flex: 1, backgroundColor: "#01a7b7" }}>
          {this.state.errorOccurred ? (
            // ERROR VIEW
            <View style={styles.errorView}>
              <Title style={{ textAlign: "center" }}>
                An error has occurred.
              </Title>
              <SubTitle style={{ textAlign: "center" }}>
                {this.state.errorName === "NotSupportedError" ||
                this.state.errorName === "NotAllowedError" ? (
                  <b>
                    HTTPS is not enabled.{" "}
                    <a
                      href={window.location.href.replace("http://", "https://")}
                      onClick={screenfull.request}
                    >
                      Click here to visit this site with HTTPS.
                    </a>
                  </b>
                ) : (
                  <p>
                    We couldn't access the device's camera because:{" "}
                    <b>{this.state.errorMessage}</b>
                  </p>
                )}
              </SubTitle>
              <SubTitle style={{ textAlign: "center" }}>
                {"\n\n"}
                Please refresh this page to try again.
              </SubTitle>
            </View>
          ) : (
            // CAMERA VIEW
            <View style={styles.cameraView}>
              <QRCamera
                handleScan={this.handleScan}
                handleError={this.handleError}
                // height={Dimensions.get("window").height / PixelRatio.get()}
              />
            </View>
          )}
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
