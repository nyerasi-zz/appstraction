import React from "react";
import { View, Text } from "react-native";
import { Link } from "../../routers/Routing.web";
import PropTypes from "prop-types";

export default class SearchResult extends React.Component {
  render() {
    return (
      <Link
        to={this.props.link ? `/artworks/${this.props.link}` : "/search"}
        style={{
          textDecoration: "none",
          color: "black",
          border: "1px solid red"
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            marginHorizontal: 20,
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 3 }}>
            <Text>{this.props.name}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>{this.props.year}</Text>
          </View>
        </View>
      </Link>
    );
  }
}

SearchResult.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.string,
  photoFileLink: PropTypes.string
};
