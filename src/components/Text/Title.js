import React from "react";
import { Text } from "react-native";
import styles from "./styles";

export default class Title extends React.Component {
  render() {
    return <Text style={styles.title}>{this.props.children}</Text>;
  }
}
