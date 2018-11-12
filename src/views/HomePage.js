import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { FaChevronRight } from "react-icons/fa";

import { Link } from "../routers/Routing";
import { Logo } from "../components/Images";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleImage: {
    width: 300,
    height: 300
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

        {/* MIDDLE TEXT */}
        <View style={{ alignItems: "center", flex: 3 }}>
          <Image
            style={styles.titleImage}
            resizeMode={"contain"}
            source={require("../assets/essay_title_white.png")}
          />
        </View>

        {/* START BUTTON */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            alignSelf: "flex-end",
            flex: 3
          }}
        >
          <Link to={"/global-menu"} style={{ textDecoration: "none" }}>
            <TouchableOpacity>
              <View>
                <Text
                  style={{
                    color: "white",
                    padding: 30
                  }}
                >
                  <Text style={{ fontSize: 21 }}>start</Text>
                  <Text style={{ fontSize: 28, textAlignVertical: "center" }}>
                    <FaChevronRight />
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
        </View>
      </ImageBackground>
    );
  }
}
