import React from "react";
import { connect } from "react-redux";
import { ScrollView, View, Image } from "react-native";
import YouTube from "react-youtube";

import { BackHeader } from "../components/Headers";
import { Title, SubTitle } from "../components/Text";
import { Footer } from "../components/Footer";

class AboutArtist extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          height: this.props.heightChanged.height || "initial"
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
            }}
          >
            <View style={{ flex: 1, width: "90%" }}>
              <Title style={{ textAlign: "center" }}>About the Artist</Title>

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
                <Title style={{ fontSize: "2.5rem", textAlign: "center" }}>
                  Hans Hofmann{"\n"}(1880-1966)
                </Title>
                <SubTitle style={{ paddingVertical: 10, fontSize: "1.4rem" }}>
                  Hans Hofmann (1880–1966) is one of the most important figures
                  of postwar American art. Celebrated for his exuberant,
                  color-filled canvases, and renowned as an influential teacher
                  for generations of artists—first in his native Germany, then
                  in New York and Provincetown—Hofmann played a pivotal role in
                  the development of Abstract Expressionism.
                  {"\n\n"}
                  Between 1900 and 1930, Hofmann’s early studies, decades of
                  painting, and schools of art took him to Munich, to Paris,
                  then back to Munich. By 1933, and for the next four decades,
                  he lived in New York and in Provincetown. Hofmann’s evolution
                  from foremost modern art teacher to pivotal modern artist
                  brought him into contact with many of the foremost artists,
                  critics, and dealers of the twentieth century: Henri Matisse,
                  Pablo Picasso, Georges Braque, Wassily Kandinsky, Sonia and
                  Robert Delauney, Betty Parsons, Peggy Guggenheim, Lee Krasner,
                  Jackson Pollock, and many others. His successful career was
                  shepherded by the postwar modern art dealer Sam Kootz, secured
                  by the art historian and critic Clement Greenberg, and
                  anchored by the professional and personal support of his first
                  wife, Maria “Miz” Wolfegg (1885–1963).
                  {"\n\n"}
                  Already 64 by the time of his first solo exhibition at Art of
                  This Century in New York in 1944, Hofmann balanced the demands
                  of teaching and painting until he closed his school in 1956.
                  Doing so enabled him to renew focus on his own painting at
                  during the heyday of Abstract Expressionism, and for the next
                  twenty years, Hofmann’s voluminous output—powerfully
                  influenced by Matisse’s use of color and Cubism’s displacement
                  of form—developed into an artistic approach and theory he
                  called “push and pull,” which he described as interdependent
                  relationships between form, color, and space. From his early
                  landscapes of the 1930s, to his “slab” paintings of the late
                  1950s, and his abstract works at the end of his career upon
                  his death in 1966, Hofmann continued to create boldly
                  experimental color combinations and formal contrasts that
                  transcended genre and style.
                  {"\n\n"}
                </SubTitle>
                <YouTube
                  videoId="vLRKFJxGh10"
                  opts={{
                    height: 200,
                    width: "100%",
                    playerVars: {
                      autoplay: 0
                    }
                  }}
                  onReady={event => event.target.pauseVideo()}
                />
                <Footer />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(AboutArtist);
