import React from "react";
import {
  Image,
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Link } from "../routers/Routing";
import { StartArrow } from "../components/Images";

export default class HomePage extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.backgroundImage}
        imageStyle={{ resizeMode: "cover" }}
        source={require("../assets/museum3.jpg")}
        blurRadius={7.5}
      >
        <View style={styles.appHeader}>
          <Image
            style={[styles.headerImage]}
            resizeMode={"contain"}
            source={require("../assets/bampfa_logo.png")}
          />
        </View>
        <View style={{ alignItems: "center", flex: 3 }}>
          <Image
            style={styles.titleImage}
            resizeMode={"contain"}
            source={require("../assets/essay_title_white.png")}
          />
        </View>
        <View style={{ alignItems: "center", flex: 3 }}>
          <Link to={"/one"} component={TouchableOpacity}>
            <StartArrow />
          </Link>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  titleImage: {
    width: 300,
    height: 300
  },
  headerImage: {
    width: 100,
    height: 100,
    flex: 1
  }
});
