import React from "react";
import { View } from "react-native";

import { SubTitle } from "../Text";

export default class Footer extends React.Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          height: 50,
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          marginTop: 20
        }}
      >
        <SubTitle style={{ textAlign: "right", color: "#444" }}>
          BAMPFA, 2019
        </SubTitle>
      </View>
    );
  }
}
