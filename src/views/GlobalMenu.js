import React from "react";
import { View } from "react-native";
import { FaWalking, FaClock, FaInfoCircle } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

import { MenuButton } from "../components/Button";
import { BackHeader } from "../components/Headers";
import { Title, SubTitle } from "../components/Text";

export default class GlobalMenu extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
        className="transition-item menu-page"
      >
        <BackHeader
          onClick={() => {
            this.props.history.replace("/");
          }}
        />

        {/* CONTENT */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View style={{ flex: 1, width: "90%", justifyContent: "center" }}>
            <Title style={{ textAlign: "center" }}>
              Welcome to the Hans Hofmann Exhibit
            </Title>
            <SubTitle style={{ textAlign: "center" }}>
              A chronology of Hans Hofmann's work and investment to teaching.
            </SubTitle>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: "center",
              width: "100%"
            }}
          >
            <MenuButton
              text="Interact with Exhibit"
              buttonStyle={{ backgroundColor: "#D20663" }}
              icon={FaWalking}
              linksTo="/camera"
            />
            <MenuButton
              text="Timeline"
              buttonStyle={{ backgroundColor: "#F8AD0B" }}
              icon={FaClock}
              linksTo="/global-menu"
            />
            {/* <MenuButton
              text="Tutorial"
              buttonStyle={{ backgroundColor: "#3DBEA8" }}
              icon={FaQuestionCircle}
            /> */}
            <MenuButton
              text="About the Artist"
              buttonStyle={{ backgroundColor: "#186DBE" }}
              icon={FaInfoCircle}
              linksTo="/about-artist"
            />
            <MenuButton
              text="Discover"
              buttonStyle={{ backgroundColor: "#3DBEA8" }}
              icon={TiSocialInstagram}
              onClick={() => {
                window.location.assign(
                  "https://www.instagram.com/explore/tags/hanshofmann/"
                );
              }}
              linksTo="/global-menu"
            />
          </View>
        </View>
      </View>
    );
  }
}
