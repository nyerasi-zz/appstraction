import React from "react";
import { View, Image, Text, TextInput, Button } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import firebase from "../data/firebase";
import { BackHeader } from "../components/Headers";
import { Title } from "../components/Text";

const styles = EStyleSheet.create({
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8
  }
});

export default class AdminLogin extends React.Component {
  state = {
    email: "",
    password: "",
    currentUser: -1,
    errorMessage: null
  };

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUser: user });
        this.props.history.push("/admin-dashboard");
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    const currentUser = this.state.currentUser;

    // LOADING ICON
    let viewToRender = (
      <Image
        style={{ marginTop: 100, width: 100, height: 100 }}
        source={require("../assets/loading.gif")}
      />
    );

    // LOGIN
    const LoginView = (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Title>Log In</Title>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="  Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="  Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <br />
        <Button title="Login" onPress={this.handleLogin} />
      </View>
    );

    // initial state is -1, so that loading icon will show by default
    if (currentUser !== -1) {
      // if null, then no user has been found in firebase (trigger login)
      if (currentUser === null) viewToRender = LoginView;
      else this.props.history.push("/admin-dashboard");
    }

    return (
      <View style={{ flex: 1 }} className="back-item">
        <BackHeader />
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          {viewToRender}
        </View>
      </View>
    );
  }
}
