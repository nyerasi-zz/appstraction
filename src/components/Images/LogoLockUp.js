import React from "react";
import { Image, View, Dimensions } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
const logoLockUpSize = {
  width: Dimensions.get("window").width,
  height: (190 * Dimensions.get("window").width) / 702,
  maxWidth: 500
};

export default class LogoLockUp extends React.Component {
  render() {
    return (
      <View style={[styles.appHeader, this.props.viewStyle]}>
        <Image
          style={[styles.logoLockUp, logoLockUpSize]}
          resizeMode={"contain"}
          source={require("../../assets/logo/QR-landing-.png")}
        />
      </View>
    );
  }
}

LogoLockUp.propTypes = {
  viewStyle: PropTypes.object
};
