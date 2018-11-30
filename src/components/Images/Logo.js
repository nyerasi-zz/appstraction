import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.appHeader}>
        <Image
          style={[styles.headerImage]}
          resizeMode={"contain"}
          source={require("../../assets/logo/bampfa_logo.png")}
        />
      </View>
    );
  }
}
