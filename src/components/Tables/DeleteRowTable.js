import React from "react";
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button, View, FlatList, TouchableHighlight, Text } from "react-native";

const styles = EStyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: "#CED0CE",
    },
    deleteButton: {
        color: "red"
    }
});

export default class DeleteRowTable extends React.Component {

    generateSeparator = () => {
        return (<View
            style={styles.separator}
        />)
    };

    render() {
        return (
            <View>
                {this.generateSeparator()}
                <FlatList
                    data={this.props.data}
                    renderItem={({item, separators}) => (
                        <TouchableHighlight
                            onPress={() => this.props.onPress(item)}
                        >
                            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                <Text>/{item.key}</Text>
                                <Button
                                    style={styles.deleteButton}
                                    title="Delete"
                                    color="#DC5249"
                                    onPress={() => this.props.delete(item)}
                                />
                            </View>
                        </TouchableHighlight>
                    )}
                    ItemSeparatorComponent={this.generateSeparator}
                />
                {this.generateSeparator()}
            </View>
        )
    }
}

DeleteRowTable.propTypes = {
    onPress: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
};
