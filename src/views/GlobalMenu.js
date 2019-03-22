import React from "react";
import { View } from "react-native";
import { FaWalking, FaSearch, FaInfoCircle } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

import { MenuButton } from "../components/Button";
import { BackHeader } from "../components/Headers";
import { Title, SubTitle } from "../components/Text";

export default class GlobalMenu extends React.Component {
  state = {
    open: false
  };

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
          <View
            style={{
              width: "90%",
              // justifyContent: "center",
              paddingHorizontal: "5%",
              paddingBottom: 20
            }}
          >
            <Title>
              Closer Look
              <br />
              Hans Hofmann: The Nature of Abstraction
            </Title>
            <SubTitle style={{ lineHeight: "1.3em" }}>
              Dive deeper into the exhibition through video interviews with
              Lucinda Barnes, curator emerita at BAMPFA; excerpts from the
              catalog; and quotes from the artist.
            </SubTitle>
          </View>

          <View
            style={{
              flex: 1,
              // justifyContent: "center",
              alignItems: "center",
              width: "100%"
            }}
          >
            <MenuButton
              text="Experience the Exhibition"
              buttonStyle={{ backgroundColor: "#D20663" }}
              icon={FaWalking}
              linksTo="/camera"
            />
            <MenuButton
              text="Search"
              buttonStyle={{ backgroundColor: "#F8AD0B" }}
              icon={FaSearch}
              linksTo="/global-menu"
            />
            <MenuButton
              text="About the Artist"
              buttonStyle={{ backgroundColor: "#186DBE" }}
              icon={FaInfoCircle}
              linksTo="/about-artist"
            />
            <MenuButton
              text="#HansHofmann"
              buttonStyle={{ backgroundColor: "#3DBEA8" }}
              icon={TiSocialInstagram}
              onClick={() => {
                window.location.assign(
                  "https://www.instagram.com/explore/tags/hanshofmann/"
                );
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
