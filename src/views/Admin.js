import React from 'react';
import { View, ScrollView, Image, Text, TextInput, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import firebase from '../data/firebase';
import { BackHeader } from '../components/Headers';
import { Title } from '../components/Text';

const styles = EStyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "$primaryGray"
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default class Admin extends React.Component{
    state = { email: '', password: '', currentUser: -1, errorMessage: null };

    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user){
                this.setState({ currentUser: user });
            } else {
                this.setState({ currentUser: null });
            }
        })
    }

    handleLogin = () => {
        const { email, password } = this.state;
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    handleLogout = () => {
        firebase.auth()
            .signOut()
            .then(this.setState({ currentUser: null }))
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render(){
        let currentUser = this.state.currentUser;
        let viewToRender = (<Image style={{marginTop: 100, width: 100, height: 100}} source={require("../assets/loading.gif")} />);

        const LoginView = (
            <View style={[styles.container, {width: '100%'}]}>
                <Title>Log In</Title>
                {this.state.errorMessage &&
                <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                </Text>}
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder=" Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder=" Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <br />
                <Button title="Login" onPress={this.handleLogin} />
            </View>);

        const DashboardView = (
            <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
                <br />
                <Button title="Logout" onPress={this.handleLogout} />
            </View>);

        // initial state is -1, so that loading icon will show by default
        if (currentUser !== -1) {
            // if null, then no user has been found in firebase (trigger login)
            if (currentUser === null)
                viewToRender = LoginView;
            else
                viewToRender = DashboardView;
        }

        return (
            <View style={{ flex: 1 }} >
                <BackHeader />

                {/* CONTENT */}
                <View style={styles.mainView}>
                    <ScrollView
                        alwaysBounceVertical={true}
                        contentContainerStyle={{ alignItems: "center" }}
                        style={{
                            flex: 1,
                            width: "100%"
                        }}
                    >
                        {viewToRender}
                    </ScrollView>
                </View>
            </View>
        )
    }
}
