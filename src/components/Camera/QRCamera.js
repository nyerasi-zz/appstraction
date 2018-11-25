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
    }

    render() {
        return (
            <QrReader
                delay={this.state.delay}
                onError={this.props.handleError}
                onScan={this.props.handleScan}
                facingMode="environment"
                height={ this.props.height }
                style={{ width: "100%" }}
            />
        );
    }
}

QRCamera.propTypes = {
    height: PropTypes.number,
    handleScan: PropTypes.func,
    handleError: PropTypes.func
};
