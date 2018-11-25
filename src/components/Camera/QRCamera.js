import React from "react";
import PropTypes from 'prop-types'
import QrReader from "./react-qr-scanner"

export default class QRCamera extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 300,
            result: "No result"
        };
        this.handleScan = this.handleScan.bind(this);
    }
    handleScan(data) {
        if (data) {
            this.setState({
                result: data
            });
        }
    }
    handleError(err) {
        console.error(err);
    }
    render() {
        return (
            <QrReader
                delay={this.state.delay}
                onError={this.handleError}
                onScan={this.handleScan}
                facingMode="environment"
                height={ this.props.height }
                style={{ width: "100%" }}
            />
        );
    }
}

QRCamera.propTypes = {
    height: PropTypes.number
};
