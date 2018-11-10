import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "../routers/Routing.web";
import { MenuButton } from "../components/Button";
import {
  FaWalking,
  FaClock,
  FaQuestionCircle,
  FaInfoCircle,
  FaChevronLeft
} from "react-icons/fa";
import { DefaultHeader } from "../components/Header";

export default class GlobalMenu extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          backgroundColor: "#F0F0F0"
        }}
      >
        <DefaultHeader>
          <Link to={"/"}>
            <TouchableOpacity>
              <Text style={{ color: "white", fontSize: 30, padding: 20 }}>
                <FaChevronLeft />
              </Text>
            </TouchableOpacity>
          </Link>
        </DefaultHeader>
        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <MenuButton
            text="Enter the Exhibit"
            buttonStyle={{ backgroundColor: "#D20663" }}
            icon={FaWalking}
          />
          <MenuButton
            text="Timeline"
            buttonStyle={{ backgroundColor: "#F8AD0B" }}
            icon={FaClock}
          />
          <MenuButton
            text="Tutorial"
            buttonStyle={{ backgroundColor: "#3DBEA8" }}
            icon={FaQuestionCircle}
          />
          <MenuButton
            text="About the Artist"
            buttonStyle={{ backgroundColor: "#186DBE" }}
            icon={FaInfoCircle}
          />
        </View>
      </View>
    );
  }
}
