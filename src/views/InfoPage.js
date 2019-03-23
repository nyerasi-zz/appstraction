import React from "react";
import { ScrollView, View } from "react-native";
import YouTube from "react-youtube";

import { BackHeader } from "../components/Headers";
import { Title, SubTitle } from "../components/Text";
import { Footer } from "../components/Footer";
import { MenuButton } from "../components/Button";

export default class InfoPage extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
        className="back-item"
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
            bounces={false}
            contentContainerStyle={{ alignItems: "center" }}
            style={{
              flex: 1
              // paddingBottom: 40
            }}
          >
            <View style={{ flex: 1, width: "90%" }}>
              <Title style={{ textAlign: "center" }}>
                About the Exhibition
              </Title>

              <View
                style={{
                  flex: 1,
                  alignItems: "center"
                }}
              >
                <SubTitle style={{ paddingVertical: 10, fontSize: "1.4rem" }}>
                  <b>Hans Hofmann: The Nature of Abstraction</b> offers a fresh
                  look at an artist you thought you knew. Hofmann's expressive
                  paintings illustrate a continuously experimental and
                  intellectually rigorous approach, which developed across two
                  world wars and pan-Atlantic avant-gardes. This retrospective
                  spans the entirety of the artist's career, connecting
                  understudied early works to iconic late-career paintings, to
                  offer new insight into Hofmann's practice and legacy.
                  {"\n\n"}
                </SubTitle>
                <YouTube
                  videoId="dOMicJDWJjM"
                  opts={{
                    height: 200,
                    width: "100%",
                    playerVars: {
                      autoplay: 0
                    }
                  }}
                  onReady={event => event.target.pauseVideo()}
                />
                <SubTitle style={{ paddingTop: 30, fontSize: "1.4rem" }}>
                  Dive deeper into the exhibition through video interviews with
                  Lucinda Barnes, curator emerita at BAMPFA; excerpts from the
                  catalog; and quotes from the artist.
                  {"\n\n"}
                </SubTitle>
                <MenuButton
                  text="Experience the Exhibition"
                  buttonStyle={{ backgroundColor: "#E9232D" }}
                  linksTo="/camera"
                />
                <SubTitle
                  style={{
                    paddingTop: 30,
                    paddingBottom: 10,
                    fontSize: "1.4rem"
                  }}
                >
                  <b>Hans Hofmann: The Nature of Abstraction</b> is organized by
                  Curator Emerita Lucinda Barnes with Curatorial Assistant
                  Matthew Coleman. The exhibition is made possible with lead
                  support from the Renate, Hans &amp; Maria Hofmann Trust. Major
                  support is provided by Bob and Dana Emery and Elissa Edelstein
                  Warner. Additional support is provided by Charles and Naomie
                  Kremer, the Terra Foundation for American Art, the Nancy and
                  Joachim Bechtle Foundation, and an anonymous donor. {"\n\n"}
                  Special thanks to Nikhil Yerasi, Zulaika Zulkephli, Neha
                  Dabke, Jason Feinberg, Alex Madrzyk and Logan Peters of
                  Invention Corps, a student organization at UC Berkeley focused
                  on human-centered design.
                  {"\n\n"}
                  <b>
                    <a href="https://bampfa.org">Learn more about BAMPFA</a>
                  </b>
                </SubTitle>
                <Footer />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
