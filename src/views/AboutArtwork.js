import React from "react";
import { Image, ScrollView, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import YouTube from "react-youtube";

import { BackHeader } from "../components/Headers";
import { Title, SubTitle } from "../components/Text";
import { Accordion } from "../components/Accordion";
import { FullWidthImage } from "../components/Images";
import firebase from '../data/firebase';

const styles = EStyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "$primaryGray"
  }
});

export default class ArtPage extends React.Component {

  constructor(){
    super();

    this.state = {
        artName: "",
        artDetails: -1
    }
  };

  componentDidMount() {
    const artName = this.props.match.params.artName;

    // fetch data from firebase and update state accordingly
    firebase.database().ref(artName)
      .once('value')
      .then((snapshot) => {
        let artDetails = snapshot.val();

        // assumes data is formatted correctly... TODO: error check data
        this.setState({
          artName: artName,
          artDetails: artDetails
        });
      })
      .catch((error) => {
        this.setState({
          artName: artName,
          artDetails: null
        });
      });
  }

  render() {
    let artDetails = this.state.artDetails;
    let viewToRender = (<Image style={{marginTop: 100, width: 100, height: 100}} source={require("../assets/loading.gif")} />);

    // initial state is -1, so that loading icon will show by default
    if (artDetails !== -1){

      // if null, then no data has been found in firebase
      if (artDetails === null){
        viewToRender = (<Title>Artwork Not Found</Title>);
      }

      else {
        viewToRender =
          (<View style={{ flex: 1, width: "90%" }}>
            <Title>{artDetails.name}</Title>
            <FullWidthImage
                style={{}}
                source={{uri: artDetails.photoFile}}
                width={700}
                height={500}
            />
            <Accordion allowMultipleOpen>
              <div label="Background" isOpen>
                <SubTitle>{artDetails.background}</SubTitle>
              </div>
              <div label="Audio">
                <audio controls>
                  <source src={artDetails.audioFile} />
                </audio>
              </div>
              <div label="Technique">
                <SubTitle>{artDetails.technique}</SubTitle>
              </div>
              <div label="Materials">
                <SubTitle>{artDetails.materials}</SubTitle>
              </div>
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
            </Accordion>
          </View>)
        ;
      }
    }

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
            {viewToRender}
          </ScrollView>
        </View>
      </View>
    );
  }
}
