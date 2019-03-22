import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import EStyleSheet from "react-native-extended-stylesheet";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MdArrowBack } from "react-icons/md";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import screenfull from "screenfull";

import { Link } from "../../routers/Routing";

const styles = EStyleSheet.create({
  headerContainer: {
    width: "100%",
    padding: 20,
    // backgroundColor: "#d6d7da",
    backgroundColor: "$primaryGray",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

class BackHeader extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        {/* MENU BUTTON */}
        <View
          style={{
            flex: 1,
            alignSelf: "flex-start",
            height: "100%"
          }}
        >
          <TouchableOpacity
            onPress={this.props.onClick || this.props.history.goBack}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start"
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 30,
                  textAlignVertical: "bottom"
                }}
              >
                <Text style={{ textAlignVertical: "center" }}>
                  <MdArrowBack />
                </Text>
              </Text>
            </View>
          </TouchableOpacity>
          {/* </Link> */}
        </View>

        {/* LOGO */}
        <View
          style={{
            alignItems: "center",
            alignSelf: "center",
            flex: 1
          }}
        >
          <Link to={"/"}>
            <Image
              style={{
                width: 100,
                height: 30,
                resizeMode: "contain"
              }}
              source={require("../../assets/logo/logo.png")}
            />
          </Link>
        </View>

        {/* Dummy item to balance out centered logo */}
        <View style={{ alignSelf: "flex-end", flex: 1 }}>
          {screenfull.enabled && (
            <TouchableOpacity
              onPress={() => {
                if (screenfull.enabled) {
                  if (screenfull.isFullscreen) screenfull.exit();
                  else screenfull.request();
                }
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "flex-end"
                }}
              >
                <Text
                  style={{
                    color: "black",
                    opacity: 0.3,
                    fontSize: 30,
                    textAlignVertical: "bottom"
                  }}
                >
                  <Text style={{ textAlignVertical: "center" }}>
                    {screenfull.isFullscreen ? (
                      <FiMinimize2 />
                    ) : (
                      <FiMaximize2 />
                    )}
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

BackHeader.propTypes = {
  onClick: PropTypes.func
};

export default withRouter(BackHeader);
