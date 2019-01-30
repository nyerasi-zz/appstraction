import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button, Image, View, Text, TextInput } from 'react-native';
import QRCode from 'qrcode-svg';
// import SvgUri from 'react-native-svg-uri';

import { BackHeader } from '../components/Headers';
import { SubTitle } from '../components/Text';
import firebase from '../data/firebase';

const styles = EStyleSheet.create({
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    },
});

export default class AdminEditArtwork extends React.Component {

    state = {
        urlName: "",
        data: -1,
    };

    componentDidMount(){
        const urlName = this.props.match.params.urlName;

        this.setState({
            urlName
        });

        // FETCH DATA
        firebase.database().ref()
            .once('value')
            .then((snapshot) => {
                // TODO: error check here
                let artDetails = snapshot.val()[urlName];

                this.setState({
                    data: artDetails
                });
                console.log(artDetails)
            })
            .catch((error) => {
                this.setState({
                    data: null
                });
            });
    }

    downloadQRCode = () => {
        const qrCode = new QRCode({
            content: "https://bampfa.herokuapp.com/artworks/" + this.state.urlName,
            padding: 4,
            width: 256,
            height: 256,
            color: "#000000",
            background: "#ffffff",
            ecl: "M"
        }).svg();

        let element = document.createElement("a");
        let file = new Blob([qrCode], {type: 'image/svg'});
        element.href = URL.createObjectURL(file);
        element.download = this.state.urlName + ".svg";
        element.click();
    };

    render(){

        const data = this.state.data;

        // LOADING ICON
        let viewToRender = <Image
            style={{marginTop: 100, width: 100, height: 100}}
            source={require("../assets/loading.gif")}
        />;

        // EDITING VIEW
        const EditingView = (
            <View style={{ flex: 1, paddingHorizontal: "10%" }}>
                <SubTitle>Url Name</SubTitle>
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="  Url Name"
                    onChangeText={urlName => this.setState({ urlName })}
                    value={this.state.urlName}
                />
                <Text>Warning: QR Codes are generated based on this value.</Text>
                <Text><a href={"/artworks/" + this.state.urlName}>Preview Link</a></Text>
                <br />

                <SubTitle>QR Code</SubTitle>
                <Text>
                    <Button title="Download SVG" onPress={this.downloadQRCode} />
                </Text>
                <br />

                <SubTitle>Artwork Title</SubTitle>
                <br />

                <SubTitle>Background</SubTitle>
                <br />

                <SubTitle>Materials</SubTitle>
                <br />

                <SubTitle>Technique</SubTitle>
                <br />

                <SubTitle>Video ID</SubTitle>
                <br />

                <SubTitle>Audio File</SubTitle>
                <br />

                <SubTitle>Photo File</SubTitle>
                <br />

            </View>
        );

        // if -1, show loading icon
        if (data !== -1) viewToRender = EditingView;

        return (
            <View style={{ flex: 1 }} >
                <BackHeader />
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                    {viewToRender}
                </View>
            </View>
        )
    }
}
