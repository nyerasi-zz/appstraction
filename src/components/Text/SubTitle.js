import React from "react";
import { Text } from "react-native";
import styles from "./styles";

export default class SubTitle extends React.Component {
  render() {
    return <Text style={styles.subtitle}>{this.props.children}</Text>;
  }
}
