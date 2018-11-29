import React from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { BackHeader } from "../components/Headers";
import { QRCamera } from "../components/Camera";
import { FullWidthImage } from "../components/Images";
import { Title, SubTitle } from "../components/Text";

const styles = EStyleSheet.create({
  cameraView: {
    backgroundColor: "$primaryGray"
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
      let searchString = ".com";
      let path = data.substring(
        data.indexOf(searchString) + searchString.length
      );
      this.props.history.push(path);
    }
  }

  handleError(err) {
    this.setState({ errorOccurred: true, errorMessage: err });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <BackHeader />
        {this.state.errorOccurred ? (
          // ERROR VIEW
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: "10%"
            }}
          >
            <Title style={{ textAlign: "center" }}>
              An error has occurred.
            </Title>
            <SubTitle style={{ textAlign: "center" }}>
              {this.state.errorMessage}
              {"\n"}
            </SubTitle>
            <SubTitle style={{ textAlign: "center" }}>
              Please refresh this page to try again.
            </SubTitle>
          </View>
        ) : (
          // CAMERA VIEW
          <View style={{ backgroundColor: "#01a7b7" }}>
            <View style={styles.cameraView}>
              <QRCamera
                handleScan={this.handleScan}
                handleError={this.handleError}
                // height={Dimensions.get("window").height / PixelRatio.get()}
              />
            </View>
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
          </View>
        )}
      </View>
    );
  }
}
