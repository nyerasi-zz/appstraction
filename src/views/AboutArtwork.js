import React from "react";
import { ScrollView, View } from "react-native";
import Youtube from "react-native-youtube";

import { DefaultHeader } from "../components/Headers";
import { Title, SubTitle } from "../components/Text";
import { Accordion } from "../components/Accordion";
import { FullWidthImage } from "../components/Images";
import artInfo from "../data/artInfo";

export default class ArtPage extends React.Component {
  render() {
    const artName = this.props.match.params.artName;
    const artDetails = artInfo[artName];

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
            alignItems: "center"
          }}
        >
          <ScrollView
            alwaysBounceVertical={true}
            contentContainerStyle={{ alignItems: "center" }}
            style={{
              flex: 1,
              width: "100%"
            }}
          >
            {artDetails ? (
              <View style={{ flex: 1, width: "90%" }}>
                <Title>{artName}</Title>
                <FullWidthImage
                  style={{}}
                  source={{
                    uri:
                      "https://via.placeholder.com/700x500.png?text=Sample+Artwork"
                  }}
                  width={700}
                  height={500}
                />
                <Accordion allowMultipleOpen>
                  <div label="Technique" isOpen>
                    <SubTitle>{artDetails.technique}</SubTitle>
                  </div>
                  <div label="Background">
                    <SubTitle>{artDetails.background}</SubTitle>
                  </div>
                  <div label="Materials">
                    <SubTitle>{artDetails.materials}</SubTitle>
                  </div>
                  <div label="Video">
                    <Youtube
                      videoId={artDetails.videoID} // The YouTube video ID
                      play={true} // control playback of video with true/false
                      fullscreen={true} // control whether the video should play in fullscreen or inline
                      loop={true} // control whether the video should loop when ended
                      onReady={e => this.setState({ isReady: true })}
                      onChangeState={e => this.setState({ status: e.state })}
                      onChangeQuality={e =>
                        this.setState({ quality: e.quality })
                      }
                      onError={e => this.setState({ error: e.error })}
                      style={{ alignSelf: "stretch", height: 300 }}
                    />
                  </div>
                </Accordion>
              </View>
            ) : (
              <Title>Artwork Not Found</Title>
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}
