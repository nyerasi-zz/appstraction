import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableHighlight, View } from "react-native";

import { Link } from "../../routers/Routing";
import styles from "./styles";

class MenuButton extends React.Component {
  testPress() {}

  render() {
    const Icon = this.props.icon;
    const link = this.props.linksTo ? this.props.linksTo : "";

    return (
      <Link
        to={link}
        onClick={this.props.onClick}
        style={{ width: "100%", textDecoration: "none" }}
      >
        <View
          style={{
            alignItems: "center"
          }}
        >
          <TouchableHighlight
            onPress={this.testPress}
            style={[this.props.buttonStyle, styles.menuButton]}
          >
            <Text style={styles.buttonText}>
              {Icon ? <Icon style={styles.buttonIcon} /> : null}&nbsp;&nbsp;
              {this.props.text}
            </Text>
          </TouchableHighlight>
        </View>
      </Link>
    );
  }
}

MenuButton.propTypes = {
  buttonStyle: PropTypes.object,
  text: PropTypes.string,
  icon: PropTypes.any,
  linksTo: PropTypes.string,
  onClick: PropTypes.func
};

export default MenuButton;
