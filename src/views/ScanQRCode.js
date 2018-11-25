import React from 'react'
import { View } from 'react-native'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { DefaultHeader } from '../components/Headers'
import { QRCamera } from '../components/Camera'

export default class ScanQRCode extends React.Component {

    componentDidMount(){
        console.log(this.props.containerHeight)
        console.log(hp("100%"))
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <DefaultHeader />
                <View style={{ flex: 1 }}>
                    <QRCamera height={hp("100%")} />
                </View>
            </View>
        )
    }
}
