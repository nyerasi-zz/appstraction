import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TouchableHighlight, View, Image, TouchableOpacity, Text, Button, TextInput } from 'react-native';
import Modal from 'react-modal';

import { DeleteRowTable } from '../components/Tables';
import { Title } from '../components/Text';
import { BackHeader } from '../components/Headers';
import firebase from '../data/firebase';
import SubTitle from "../components/Text/SubTitle";

const styles = EStyleSheet.create({
    newArtworkButton: {
        height: 40,
        width: 100,
        backgroundColor: "#4CD964",
        justifyContent: "center",
        borderRadius: 3
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
        padding: 10,
        width: "100%"
    },
});

export default class AdminDashboard extends React.Component {

    state = {
        currentUser: -1,
        newArtworkErrorMessage: null,
        errorMessage: null,
        artworkUrls: [],
        modalVisible: false,
        urlToAdd: ""
    };

    componentDidMount() {

        // CHECK LOGIN
        firebase.auth().onAuthStateChanged(user => {
            if (user){
                this.setState({ currentUser: user });
            } else {
                this.setState({ currentUser: null });
                this.props.history.push('/admin'); // go back to login
            }
        });

        // FETCH DATA
        firebase.database().ref()
            .once('value')
            .then((snapshot) => {
                let artDetails = snapshot.val();
                let artworkUrls = [];

                // assumes data is formatted correctly... TODO: error check data
                for (let key in artDetails) {
                    if (artDetails.hasOwnProperty(key)) {
                        artworkUrls.push({key: key});
                    }
                }

                this.setState({
                    artworkUrls: artworkUrls
                });
            })
            .catch((error) => {
                this.setState({
                    artworkUrls: []
                });
            });
    }

    handleLogout = () => {
        firebase.auth()
            .signOut()
            .then(this.setState({ currentUser: null }))
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    isValidUrl = (newUrl) => {
        return !newUrl.split("").some(ch => "[]/.#$".includes(ch))
    };

    handleNewArtwork = () => {
        // check for invalid firebase characters
        if (!this.isValidUrl(this.state.urlToAdd))
            this.setState({ newArtworkErrorMessage: "Invalid URL, please try again" });
        else
            this.props.history.push("/admin-edit-artwork/" + this.state.urlToAdd)
    };

    handleEditItem = (item) => {
        this.props.history.push("/admin-edit-artwork/" + item.key);
    };

    deleteArtworkPage = (item) => {
        firebase.database().ref(item.key)
            .once('value')
            .then((snapshot) => {
                // get audio and video file names
                let artDetails = snapshot.val();
                let audioFileName = artDetails.audioFileName;
                let photoFileName = artDetails.photoFileName;

                // delete text from firebase database
                firebase.database().ref(item.key).remove();

                // delete media from firebase storage
                if (audioFileName !== "")
                    firebase.storage().ref(item.key).child(audioFileName).delete();
                if (photoFileName !== "")
                    firebase.storage().ref(item.key).child(photoFileName).delete();
            });

        // remove from current state
        let newArtworkUrls = this.state.artworkUrls.filter(function(obj) {
            return obj.key !== item.key;
        });
        this.setState({ artworkUrls: newArtworkUrls });
    };

    render(){
        const currentUser = this.state.currentUser;

        // LOADING ICON
        let viewToRender = <Image
            style={{marginTop: 100, width: 100, height: 100}}
            source={require("../assets/loading.gif")}
        />;

        // DASHBOARD
        const DashBoard = (
            <View style={{ flex: 1, paddingHorizontal: "10%" }}>

                <Modal
                    isOpen={this.state.modalVisible}
                    onRequestClose={() => {this.setState({ modalVisible: false })}}
                    style={{
                        content : {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)'
                        }
                    }}
                    contentLabel="New Artwork"
                    ariaHideApp={false}
                >
                    <View style={{ flex: 0, flexDirection: "row", justifyContent: "flex-end" }}>
                        <TouchableHighlight
                            onPress={() => {
                                this.setState({ modalVisible: false })
                            }}>
                            <Text><b>X</b></Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{ flex: 1, alignContent: "center"}}>
                        <SubTitle>New Artwork Url Extension<br /></SubTitle>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Url Extension"
                            onChangeText={urlToAdd => {
                                this.setState({
                                    urlToAdd,
                                    newArtworkErrorMessage: this.isValidUrl(urlToAdd) ? null : "Invalid URL, please try again"
                                });
                            }}
                            value={this.state.urlToAdd}
                        />
                        {this.state.newArtworkErrorMessage &&
                        <Text style={{ color: 'red' }}>
                            {this.state.newArtworkErrorMessage}
                        </Text>}
                        <br />
                        <Button
                            onPress={this.handleNewArtwork}
                            title="Create New Artwork"
                        />
                    </View>
                </Modal>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <Text>
                        Hi {currentUser && currentUser.email}!
                    </Text>
                    <Button
                        style={{ height: 40, width: 100 }}
                        title="Logout"
                        onPress={this.handleLogout}
                    />
                </View>
                <br />
                <Title>Active Artworks</Title>
                <TouchableOpacity
                    style={styles.newArtworkButton}
                    title="Add New Artwork"
                    onPress={() => {
                        this.setState({ modalVisible: true });
                    }}
                >
                    <Text style={{color: "#fff", textAlign: "center"}}>ADD ARTWORK</Text>
                </TouchableOpacity>
                <DeleteRowTable
                    onPress={(item) => this.handleEditItem(item)}
                    delete={this.deleteArtworkPage}
                    data={this.state.artworkUrls}
                />
            </View>
        );

        // if -1, show loading icon
        if (currentUser !== -1) {
            // if null, then no user has been found in firebase (trigger login)
            if (currentUser === null)
                this.props.history.push('/admin');
            else
                viewToRender = DashBoard;
        }

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