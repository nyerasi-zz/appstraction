import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableHighlight } from "react-native";
import styles from "./styles";

class MenuButton extends React.Component {
  testPress() {
    console.log("pressed button");
  }

  render() {
    const Icon = this.props.icon;

    return (
      <TouchableHighlight
        onPress={this.testPress}
        style={[this.props.buttonStyle, styles.menuButton]}
      >
        <Text style={styles.buttonText}>
          {Icon ? <Icon style={styles.buttonIcon} /> : null}&nbsp;&nbsp;
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }
}

MenuButton.propTypes = {
  buttonStyle: PropTypes.object,
  text: PropTypes.string,
  icon: PropTypes.any
};

export default MenuButton;
