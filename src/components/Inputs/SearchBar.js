import React from "react";
import { View, TextInput } from "react-native";
import { IoIosSearch } from "react-icons/io";
import PropTypes from "prop-types";

const styles = {
  searchSection: {
    height: 40,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderRadius: 50
  },
  searchIcon: {
    padding: 10
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "lightgrey",
    paddingHorizontal: 20,
    outline: "none",
    borderRadius: 50
  }
};

export default class SearchBar extends React.Component {
  state = {};
  render() {
    return (
      <View style={styles.searchSection}>
        <IoIosSearch style={styles.searchIcon} size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Search by title or year"
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

SearchBar.propTypes = { onChangeText: PropTypes.func };
