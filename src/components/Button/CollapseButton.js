import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { IoIosArrowRoundForward } from "react-icons/io";

import styles from "./styles";
import { Link } from "../../routers/Routing";

export default class CollapseButton extends React.Component {
  render() {
    const headerText = this.props.mainText ? this.props.mainText : "";
    //const bodyText = this.props.arrowText ? this.props.arrowText : "";
    //const linkTo = this.props.linkTo ? this.props.linkTo : "";


    return (
      <View style={[this.props.style, styles.collapseButton]}>
        <Link to={linkTo} style={{ textDecoration: "none", color: "black" }}>
          <View style={{}}>
            <Text style={styles.mainText}>{mainText}</Text>
            <Text style={styles.arrowText}>
              <Text style={styles.redArrow}>
                <IoIosArrowRoundForward />
                &nbsp;
              </Text>
              {arrowText}
            </Text>
          </View>
        </Link>
      </View>
    );
  }
}

SkipTutorialButton.propTypes = {
  mainText: PropTypes.string,
  arrowText: PropTypes.string,
  linkTo: PropTypes.string,
  style: PropTypes.object
};
