import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { FaChevronRight } from "react-icons/fa";

import { Link } from "../routers/Routing";
import { LogoLockUp } from "../components/Images";

export default class HomePage extends React.Component {
  render() {
    return (
      <View
        className="transition-item home-page"
        data-transition-id="home-page"
        style={{ flex: 1 }}
      >
        <ImageBackground
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
          imageStyle={{ resizeMode: "cover" }}
          source={require("../assets/artworks/IndianSunset.jpg")}
        >
          {/* TITLE TEXT */}
          <View
            style={{
              flex: 1,
              width: "100%",
              alignItems: "center",
              paddingTop: 30
            }}
          >
            <Image
              style={{
                width: Dimensions.get("window").width * 0.7,
                height: ((920 * Dimensions.get("window").width) / 984) * 0.7,
                maxWidth: 450,
                marginTop: window.innerWidth > 800 ? "-100px" : 0
              }}
              imageStyle={{ width: "80%" }}
              resizeMode="contain"
              source={require("../assets/essay_title_white.png")}
            />
          </View>

          {/* START BUTTON */}
          <View
            style={{
              flex: 3,
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "100%"
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
          <LogoLockUp
            viewStyle={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          />
        </ImageBackground>
      </View>
    );
  }
}
