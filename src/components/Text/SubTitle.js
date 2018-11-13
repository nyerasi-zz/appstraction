import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import styles from "./styles";

export default class SubTitle extends React.Component {
  render() {
    return (
      <Text style={[styles.subtitle, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

SubTitle.propTypes = {
  style: PropTypes.object
};
