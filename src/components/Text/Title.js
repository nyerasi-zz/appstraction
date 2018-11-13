import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import styles from "./styles";

export default class Title extends React.Component {
  render() {
    return (
      <Text style={[styles.title, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

Title.propTypes = {
  style: PropTypes.object
};
