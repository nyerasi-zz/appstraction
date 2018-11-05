import React from "react";
import { Image } from "react-native";
import styles from "./styles";

export default class StartArrow extends React.Component {
  render() {
    return (
      <Image
        style={styles.startImage}
        resizeMode={"contain"}
        source={require("../../assets/start_arrow.png")}
      />
    );
  }
}
