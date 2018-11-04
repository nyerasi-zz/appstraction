import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from '../../routers/Routing';
import styles from './styles';

export default class Other extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', flex: 3 }}>
                <Link to={'/'} component={TouchableOpacity}>
                    <Text style={styles.appIntro}>
                        Other page
                    </Text>
                </Link>
            </View>
        )
    }
}
