import React from "react";
import { ScrollView, View, Image } from "react-native";

import { BackHeader } from "../components/Headers";
import { Title, SubTitle } from "../components/Text";

export default class AboutArtist extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <BackHeader />

        {/* CONTENT */}
        <View
          style={{
            flex: 1,
            alignItems: "center"
          }}
        >
          <ScrollView
            alwaysBounceVertical={true}
            contentContainerStyle={{ alignItems: "center" }}
            style={{
              flex: 1
            }}
          >
            <View style={{ flex: 1, width: "90%" }}>
              <Title>About the Artist</Title>

              <View
                style={{
                  flex: 1,
                  alignItems: "center"
                }}
              >
                <Image
                  style={{ width: 200, height: 200 }}
                  source={require("../assets/HansHofmann.png")}
                />
                <Title style={{ fontSize: 25, textAlign: "center" }}>
                  Hans Hofmann{"\n"}(1880-1966)
                </Title>
                <SubTitle style={{ paddingVertical: 10 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam bibendum metus urna, non laoreet eros fringilla in.
                  Duis at lacinia mi, at iaculis elit. Proin fermentum lacus
                  tellus, non mollis lacus consequat blandit. Nunc egestas, elit
                  id vulputate porttitor, eros mi porta dolor, sit amet rutrum
                  lorem nunc eget purus. Pellentesque non mi justo. Duis nec
                  auctor lacus. Donec ornare placerat massa, lacinia tempus
                  dolor pretium vulputate. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Curabitur pellentesque posuere ipsum in efficitur.
                  {"\n\n"}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam bibendum metus urna, non laoreet eros fringilla in.
                  Duis at lacinia mi, at iaculis elit. Proin fermentum lacus
                  tellus, non mollis lacus consequat blandit. Nunc egestas, elit
                  id vulputate porttitor, eros mi porta dolor, sit amet rutrum
                  lorem nunc eget purus. Pellentesque non mi justo. Duis nec
                  auctor lacus. Donec ornare placerat massa, lacinia tempus
                  dolor pretium vulputate. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Curabitur pellentesque posuere ipsum in efficitur.
                </SubTitle>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
