import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

export default class LogoLockUp extends React.Component {
  render() {
    return (
      <View style={styles.appHeader}>
        <Image
          style={[styles.logoLockUp]}
          resizeMode={"contain"}
          source={require("../../assets/logo/QR-landing-.png")}
        />
      </View>
    );
  }
}
