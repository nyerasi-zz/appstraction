import React from "react";
import { connect } from "react-redux";
import { Image, ScrollView, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import YouTube from "react-youtube";
import "../assets/stylesheets/hidden.css";

import { BackHeader } from "../components/Headers";
import { Title, SubTitle } from "../components/Text";
import { Accordion } from "../components/Accordion";
import { Footer } from "../components/Footer";
import { FullWidthImage } from "../components/Images";
import firebase from "../data/firebase";

const styles = EStyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "$primaryGray"
  },
  subtitle: {
    fontFamily: "Gotham Book, sans-serif",
    lineHeight: 24,
    fontSize: 16,
    color: "#000000"
  }
});

class ArtPage extends React.Component {
  constructor() {
    super();

    this.state = {
      artName: "",
      artDetails: -1
    };
  }

  componentDidMount() {
    const artName = this.props.match.params.artName;

    // fetch data from firebase and update state accordingly
    firebase
      .database()
      .ref(artName)
      .once("value")
      .then(snapshot => {
        let artDetails = snapshot.val();

        console.log(artDetails);

        // assumes data is formatted correctly... TODO: error check data
        this.setState({
          artName: artName,
          artDetails: artDetails
        });
      })
      .catch(error => {
        this.setState({
          artName: artName,
          artDetails: null
        });
      });
  }

  render() {
    let artDetails = this.state.artDetails;
    let viewToRender = (
      <Image
        style={{ marginTop: 100, width: 100, height: 100 }}
        source={require("../assets/loading.gif")}
      />
    );

    // initial state is -1, so that loading icon will show by default
    if (artDetails !== -1) {
      // if null, then no data has been found in firebase
      if (artDetails === null) {
        viewToRender = (
          <Title
            style={{ marginTop: 100, textAlign: "center", lineHeight: "1" }}
          >
            Artwork not found
            <br />
            <span role="img" aria-label="painter emoji">
              😢🖼
            </span>
          </Title>
        );
      } else {
        viewToRender = (
          <View style={{ flex: 1, width: "90%" }}>
            <Title>{artDetails.name}</Title>

            {artDetails.photoFileLink !== "" && (
              <FullWidthImage
                style={{}}
                source={{ uri: artDetails.photoFileLink }}
                width={700}
                height={500}
              />
            )}

            <Accordion allowMultipleOpen>
              {artDetails.background !== "" && (
                <div label="Artwork Information" isOpen>
                  <div
                    style={{
                      width: "100%",
                      fontFamily: "Gotham Book, sans-serif",
                      lineHeight: "24px",
                      fontSize: 16,
                      color: "#000000"
                    }}
                    dangerouslySetInnerHTML={{ __html: artDetails.background }}
                  />
                  {/* <SubTitle>{artDetails.background}</SubTitle> */}
                </div>
              )}

              {(artDetails.audioText !== "" ||
                artDetails.audioFileLink !== "") && (
                <div label="Audio">
                  {artDetails.audioFileLink !== "" && (
                    <div>
                      <audio controls>
                        <source src={artDetails.audioFileLink} />
                      </audio>
                      <br />
                    </div>
                  )}
                  <SubTitle>{artDetails.audioText}</SubTitle>
                </div>
              )}

              {artDetails.technique !== "" && (
                <div label="Technique">
                  <SubTitle>{artDetails.technique}</SubTitle>
                </div>
              )}

              {artDetails.materials !== "" && (
                <div label="Materials">
                  <SubTitle>{artDetails.materials}</SubTitle>
                </div>
              )}

              {artDetails.videoID !== "" && (
                <div label="Video">
                  <YouTube
                    videoId={artDetails.videoID}
                    opts={{
                      height: 200,
                      width: "100%",
                      playerVars: {
                        autoplay: 0
                      }
                    }}
                    onReady={event => event.target.pauseVideo()}
                  />
                </div>
              )}
            </Accordion>

            <Footer />
          </View>
        );
      }
    }

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
        <View style={styles.mainView}>
          <ScrollView
            bounces={false}
            alwaysBounceVertical={false}
            contentContainerStyle={{ alignItems: "center" }}
            style={{
              flex: 1,
              width: "100%",
              paddingBottom: 40
            }}
          >
            {viewToRender}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(ArtPage);
