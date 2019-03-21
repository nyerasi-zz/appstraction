import React from "react";
import { Image, ScrollView, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import YouTube from "react-youtube";
import "../assets/stylesheets/hidden.css";
import artworkNames from "../data/artworkNames";
import { BackHeader } from "../components/Headers";
import { Title, SubTitle } from "../components/Text";
import { Accordion } from "../components/Accordion";
import { FullWidthImage } from "../components/Images";
import firebase from "../data/firebase";

const styles = EStyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "$primaryGray"
  }
});

export default class SearchArtwork extends React.Component {
  constructor() {
    super(props);
    this.state = {
      filteredNames: artworkNames,
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
          <Title style={{ marginTop: 100 }}>
            No Data Found{" "}
            <span role="img" aria-label="painter emoji">
              👨‍🎨🖼
            </span>
          </Title>
        );
      } else {
        viewToRender = (
          // we'll build the search results here
        );
      }
    }

    return (
      //testing list rendering
      <div className="content">
        <div className="container">
          <section className="section">
            <ul>
              {this.state.filteredNames.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <hr />
              <section className="section">
                <form className="form" id="searchArtworksForm">
                  <input
                    type="text"
                    className="input"
                    id="addInput"
                    placeholder="search by title or year"
                  />
                  <button className="button is-info" onClick={this.addItem}>
                    Search the exhibit!
                  </button>
                </form>
              </section>
        </div>
      </div>
    );
  }
}
