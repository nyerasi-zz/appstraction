import React from "react";
import { connect } from "react-redux";
import { ScrollView, View, Image } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { BackHeader } from "../components/Headers";
import { SearchBar } from "../components/Inputs";
import SearchResult from "../components/SearchResult/SearchResult";
import { Footer } from "../components/Footer";

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

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.updateSearchResults = this.updateSearchResults.bind(this);
  }

  state = {
    artDetails: -1,
    filterDetails: {}
  };

  componentDidMount() {
    // fetch data from firebase and update state accordingly
    firebase
      .database()
      .ref()
      .once("value")
      .then(snapshot => {
        let artDetails = snapshot.val();

        // assumes data is formatted correctly... TODO: error check data
        this.setState({
          artDetails: artDetails,
          filterDetails: artDetails
        });
      })
      .catch(error => {
        this.setState({
          artDetails: null
        });
      });
  }

  //strips input and filters artDetails
  updateSearchResults(searchText) {
    const filterDetails = { ...this.state.artDetails };
    searchText = searchText.toLowerCase();

    // filter artDetails based on searchText
    if (searchText !== "") {
      for (var k in this.state.artDetails) {
        const { name, background } = this.state.artDetails[k];
        const year = this.yearString(background);
        if (
          !name.toLowerCase().includes(searchText) &&
          !year.includes(searchText)
        ) {
          delete filterDetails[k];
        }
      }
    }

    this.setState({
      searchText,
      filterDetails
    });
  }

  //finds the year of an artwork from the tombstone description
  yearString(desc) {
    var yearRegex = new RegExp("(19[0-9]{2})");
    var result = yearRegex.exec(desc);
    return result[0];
  }

  render() {
    let viewToRender = (
      <Image
        style={{ marginTop: 100, width: 100, height: 100 }}
        source={require("../assets/loading.gif")}
      />
    );

    if (this.state.artDetails !== -1) {
      viewToRender = (
        <View style={{ flex: 1, width: "100%" }}>
          <SearchBar onChangeText={this.updateSearchResults} />
          <ScrollView
            bounces={false}
            alwaysBounceVertical={false}
            contentContainerStyle={{
              alignItems: "center"
            }}
            scrollEnabled
            style={{
              height: "100%",
              flex: 1,
              width: "100%",
              paddingTop: 10,
              paddingBottom: 40,
              paddingHorizontal: 20,
              marginTop: 10
            }}
          >
            <View />
            {Object.keys(this.state.filterDetails).map(
              function(key, index) {
                const artDetails = this.state.artDetails;
                const artworkYear = this.yearString(artDetails[key].background);
                return (
                  <SearchResult
                    key={index}
                    name={artDetails[key].name}
                    year={artworkYear}
                    link={key}
                  />
                );
              }.bind(this)
            )}

            <Footer />
          </ScrollView>
        </View>
      );
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
        <View style={styles.mainView}>{viewToRender}</View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(Search);
