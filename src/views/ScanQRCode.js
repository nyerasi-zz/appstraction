import React from "react";
import { View } from "react-native";

import { BackHeader } from "../components/Headers";
import { QRCamera } from "../components/Camera";
import { FullWidthImage } from "../components/Images";

export default class ScanQRCode extends React.Component {
  constructor(props) {
    super(props);
    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
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
    console.error(err);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#01a7b7" }}>
        <BackHeader />
        <View>
          <QRCamera
            handleScan={this.handleScan}
            handleError={this.handleError}
            // height={Dimensions.get("window").height / PixelRatio.get()}
          />
        </View>
        <View
          style={{
            flex: 1,
            // justifyContent: "flex-end",
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
