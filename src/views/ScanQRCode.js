import React from 'react'
import { View, Dimensions, PixelRatio } from 'react-native'

import { BackHeader } from '../components/Headers'
import { QRCamera } from '../components/Camera'

export default class ScanQRCode extends React.Component {

    constructor(props){
        super(props);
        this.handleScan = this.handleScan.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleScan(data) {
        if (data) {
            let path = data.substring(data.indexOf('.com') + 4);
            this.props.history.push(path);
        }
    }

    handleError(err) {
        console.error(err);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <BackHeader />
                <QRCamera handleScan={this.handleScan} handleError={this.handleError} height={ Dimensions.get('window').height / PixelRatio.get() } />
            </View>
        )
    }
}
