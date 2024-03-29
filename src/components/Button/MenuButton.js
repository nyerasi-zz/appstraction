import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Text, View } from "react-native";
import { Button } from "@material-ui/core";

const styles = {
  menuButton: {
    alignItems: "center",
    padding: 10,
    margin: "11px 15px",
    width: "80%",
    borderRadius: 5,
    textTransform: "none",
    fontWeight: 900,
    boxShadow: "none"
  },
  buttonText: {
    color: "white",
    fontSize: "1.4rem",
    fontWeight: "bold"
  },
  buttonIcon: {
    paddingRight: 10,
    marginTop: 2,
    verticalAlign: "text-top"
  }
};

class MenuButton extends React.Component {
  buttonClick = () => {
    if (this.props.onClick) this.props.onClick();
    if (this.props.linksTo) this.props.history.push(this.props.linksTo);
  };

  render() {
    const Icon = this.props.icon;
    // const link = this.props.linksTo ? this.props.linksTo : "";

    return (
      // <Link
      //   to={link}
      //   onClick={this.props.onClick}
      //   style={{ width: "100%", textDecoration: "none" }}
      // >
      <View
        style={{
          width: "100%",
          alignItems: "center"
        }}
      >
        <Button
          variant="contained"
          style={{ ...this.props.buttonStyle, ...styles.menuButton }}
          onClick={() => {
            setTimeout(this.buttonClick, 200);
          }}
        >
          <Text style={styles.buttonText}>
            {Icon ? (
              <Icon style={{ ...styles.buttonIcon, ...this.props.iconStyle }} />
            ) : null}
            {this.props.text}
          </Text>
        </Button>
        {/* <TouchableHighlight
            onPress={() => {}}
            style={[this.props.buttonStyle, styles.menuButton]}
          >
            <Text style={styles.buttonText}>
              {Icon ? <Icon style={styles.buttonIcon} /> : null}&nbsp;&nbsp;
              {this.props.text}
            </Text>
          </TouchableHighlight> */}
      </View>
      // </Link>
    );
  }
}

MenuButton.propTypes = {
  buttonStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  text: PropTypes.string,
  icon: PropTypes.any,
  linksTo: PropTypes.string,
  onClick: PropTypes.func
};

export default withRouter(MenuButton);
