import React from "react";
import {
  Image,
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Link } from "../routers/Routing.web";
import { StartArrow, Logo } from "../components/Images";

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

export default class HomePage extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.backgroundImage}
        imageStyle={{ resizeMode: "cover" }}
        source={require("../assets/Indian_Sunset.jpg")}
        blurRadius={7.5}
      >
        <Logo />
        <View style={{ alignItems: "center", flex: 3 }}>
          <Image
            style={styles.titleImage}
            resizeMode={"contain"}
            source={require("../assets/essay_title_white.png")}
          />
        </View>
        <View style={{ alignItems: "center", flex: 3 }}>
          <Link to={"/global-menu"}>
            <TouchableOpacity>
              <StartArrow />
            </TouchableOpacity>
          </Link>
        </View>
      </ImageBackground>
    );
  }
}
