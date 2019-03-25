import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { FaPaintBrush, FaInfoCircle, FaQrcode } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

import { MenuButton } from "../components/Button";
import { BackHeader } from "../components/Headers";
import { Title, SubTitle } from "../components/Text";

class GlobalMenu extends React.Component {
  state = {
    open: false
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          height: this.props.heightChanged.height || "initial"
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
            alignItems: "center",
            overflow: "auto"
          }}
        >
          <View
            style={{
              width: "90%",
              paddingHorizontal: "5%",
              paddingBottom: 20
            }}
          >
            <Title
              style={{
                fontSize: "2.5rem"
              }}
            >
              Closer Look
              <br />
              Hans Hofmann: The Nature of Abstraction
            </Title>
            <SubTitle style={{ lineHeight: "1.3em", fontSize: "1.2rem" }}>
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
              icon={FaQrcode}
              linksTo="/camera"
            />
            <MenuButton
              text="Navigate Artworks"
              buttonStyle={{ backgroundColor: "#F8AD0B" }}
              icon={FaPaintBrush}
              linksTo="/search"
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
              iconStyle={{ fontSize: "1.8rem", marginTop: -1 }}
              icon={TiSocialInstagram}
              onClick={() => {
                window.location.assign(
                  "https://www.instagram.com/explore/tags/hanshofmann/"
                );
              }}
            />
            <View style={{ width: "100%", height: 50 }} />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(GlobalMenu);
