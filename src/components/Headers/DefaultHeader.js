import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MdMenu } from "react-icons/md";

import { Link } from "../../routers/Routing";
import styles from "./styles";

export default class DefaultHeader extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        {/* MENU BUTTON */}
        <View
          style={{
            flex: 1,
            alignSelf: "flex-start"
          }}
        >
          <Link to={"/"}>
            <TouchableOpacity>
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
                    padding: 20,
                    textAlignVertical: "bottom"
                  }}
                >
                  <Text style={{ textAlignVertical: "center" }}>
                    <MdMenu />
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        {/* LOGO */}
        <View style={{ alignItems: "center", alignSelf: "center", flex: 1 }}>
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
        <View style={{ alignSelf: "flex-end", flex: 1 }} />
      </View>
    );
  }
}
