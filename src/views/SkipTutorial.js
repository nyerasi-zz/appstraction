import React from "react";
import { View } from "react-native";

import { SkipTutorialButton } from "../components/Button";
import { DefaultHeader } from "../components/Headers";
import { Title, SubTitle } from "../components/Text";

export default class SkipTutorial extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F0F0F0"
        }}
      >
        <DefaultHeader />

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
            <SkipTutorialButton
              mainText="I've been here before."
              arrowText="Skip Tutorial"
            />
            <SkipTutorialButton
              mainText="This is my first time here!"
              arrowText="View brief tutorial"
            />
          </View>
        </View>
      </View>
    );
  }
}
