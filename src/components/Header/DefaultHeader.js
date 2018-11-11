import React from "react";
import { View } from "react-native";
import styles from "./styles";

export default class DefaultHeader extends React.Component {
  render() {
    return <View style={styles.headerContainer}>{this.props.children}</View>;
  }
}
