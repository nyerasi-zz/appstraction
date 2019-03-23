import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "react-native";

export default class AutoGrowTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value ? this.props.value : "",
      height: 100
    };
  }

  render() {
    return (
      <TextInput
        placeholder={this.props.placeholder}
        onChangeText={value => {
          this.props.onChangeText(value);
          this.setState({ value });
        }}
        style={[
          this.props.style,
          { minHeight: 100, height: this.state.height }
        ]}
        editable={this.props.editable ? this.props.editable : true}
        multiline={this.props.multiline ? this.props.multiline : true}
        value={this.state.value}
        onContentSizeChange={e =>
          this.setState({ height: e.nativeEvent.contentSize.height })
        }
      />
    );
  }
}

AutoGrowTextInput.propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  editable: PropTypes.bool,
  multiline: PropTypes.bool,
  value: PropTypes.string
};
