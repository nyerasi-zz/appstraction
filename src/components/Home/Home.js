import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from '../../routers/Routing';
import styles from './styles';

export default class Home extends React.Component {

    render() {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
                <Link to={'/one'} component={TouchableOpacity} >
                    <Text style={styles.appIntro}>
                        To get started, edit src/App.js and save to reload.
                    </Text>
                </Link>
            </View>
        );
    };
}