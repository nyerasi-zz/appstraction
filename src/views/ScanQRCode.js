import React from "react";
import { View, Alert } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { BackHeader } from "../components/Headers";
import { QRCamera } from "../components/Camera";
import { FullWidthImage } from "../components/Images";

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
  }

  handleScan(data) {
    this.handleError("test");

    if (data) {
      let searchString = ".com";
      let path = data.substring(
        data.indexOf(searchString) + searchString.length
      );
      // this.props.history.push(path);
    }
  }

  handleError(err) {
    console.error(err);
    Alert.alert(
      "An error occurred :(",
      err,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: true }
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#01a7b7" }}>
        <BackHeader />
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
    );
  }
}
