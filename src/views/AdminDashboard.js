import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Image, TouchableOpacity, Text, Button } from 'react-native';

import { DeleteRowTable } from '../components/Tables';
import { Title } from '../components/Text';
import { BackHeader } from '../components/Headers';
import firebase from '../data/firebase';

const styles = EStyleSheet.create({
    newArtworkButton: {
        height: 40,
        width: 100,
        backgroundColor: "#4CD964",
        justifyContent: "center",
        borderRadius: 3
    }
});

export default class AdminDashboard extends React.Component {

    state = {
        currentUser: -1,
        errorMessage: null,
        artworkUrls: []
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

    handleNewArtwork = () => {
        console.log("new")
    };

    handleEditItem = (item) => {
        this.props.history.push("/admin-edit-artwork/" + item.key);
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
                    onPress={this.handleNewArtwork}
                >
                    <Text style={{color: "#fff", textAlign: "center"}}>ADD ARTWORK</Text>
                </TouchableOpacity>
                <DeleteRowTable
                    onPress={(item) => this.handleEditItem(item)}
                    delete={(item) => console.log("delete: ", item)}
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