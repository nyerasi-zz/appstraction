import React from "react";
import { View, Text, ImageBackground } from "react-native";
import PropTypes from "prop-types";

import { Link } from "../../routers/Routing.web";

export default class SearchResult extends React.Component {
  render() {
    return (
      <Link
        to={this.props.link ? `/artworks/${this.props.link}` : "/search"}
        style={{
          width: "100%",
          textDecoration: "none",
          margin: "10px 20px",
          borderRadius: 5,
          color: "black",
          overflow: "hidden",
          backgroundColor: "white"
        }}
      >
        <ImageBackground
          source={require(`../../assets/search_artworks/${
            this.props.link
          }.jpg`)}
          style={{
            width: "100%",
            height: 65,
            overflow: "hidden"
          }}
          imageStyle={{
            width: "100%",
            resizeMode: "cover"
          }}
        />
        <View
          style={{
            width: "100%",
            paddingHorizontal: 20,
            flexDirection: "row",
            paddingVertical: 10
          }}
        >
          <View style={{ flex: 3 }}>
            <Text numberOfLines={1} style={{ flex: 1 }}>
              {this.props.name}
            </Text>
          </View>
          <View
            style={{
              flex: 1
            }}
          >
            <Text style={{ textAlign: "right" }}>{this.props.year}</Text>
          </View>
        </View>
      </Link>
    );
  }
}

SearchResult.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.string
};
