import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Link } from "../routers/Routing";

export default class TempPage extends React.Component {
  render() {
    return (
      <View style={{ alignItems: "center", flex: 3 }}>
        <Link to={"/"} component={TouchableOpacity}>
          <Text style={styles.appIntro}>Go Back</Text>
        </Link>
      </View>
    );
  }
}

var styles = EStyleSheet.create({
  appIntro: {
    flex: 3,
    fontSize: 30,
    textAlign: "center"
  }
});
