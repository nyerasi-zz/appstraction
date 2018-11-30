import React from "react";
import { ScrollView, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { BackHeader } from "../components/Headers";
import { Title, SubTitle } from "../components/Text";
import { Accordion } from "../components/Accordion";
import { FullWidthImage } from "../components/Images";
import artInfo from "../data/artInfo";

const styles = EStyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "$primaryGray"
  }
});

export default class ArtPage extends React.Component {
  render() {
    const artName = this.props.match.params.artName;
    const artDetails = artInfo[artName];

    return (
      <View
        style={{
          flex: 1
        }}
      >
        <BackHeader />

        {/* CONTENT */}
        <View style={styles.mainView}>
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
                <Title>{artDetails.name}</Title>
                <FullWidthImage
                  style={{}}
                  source={require("../assets/artworks/" + artDetails.photoFile)}
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
