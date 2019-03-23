import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { FaChevronRight } from "react-icons/fa";

import { Link } from "../routers/Routing";
import { Logo } from "../components/Images";

const styles = {
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleImage: {
    width: 300,
    height: 300
  }
};

export default class HomePage extends React.Component {
  render() {
    return (
      <View
        className="transition-item home-page"
        data-transition-id="home-page"
        style={{ flex: 1 }}
      >
        <ImageBackground
          style={styles.backgroundImage}
          imageStyle={{ resizeMode: "cover" }}
          source={require("../assets/IndianSunsetBlur.jpg")}
        >
          <Logo />

          {/* MIDDLE TEXT */}
          <View style={{ alignItems: "center", flex: 3 }}>
            <Image
              style={styles.titleImage}
              resizeMode="contain"
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
            <Link to="/global-menu" style={{ textDecoration: "none" }}>
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
      </View>
    );
  }
}
