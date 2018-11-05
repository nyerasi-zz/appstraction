import React from "react";
import { connect } from "react-redux";
import { View, Text, Animated, StyleSheet, StatusBar, Image, ImageBackground} from "react-native";
import { exampleAction } from "./redux/actions/exampleAction";
import { Router, Switch, Route } from './routers/Routing'; // change to native if needed
import Other from './components/Other/Other';
import Home from './components/Home/Home';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.imageAnimation = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.loop(
            Animated.timing(this.imageAnimation, {
                toValue: 1,
                duration: 1005
            })
        ).start();

        StatusBar.setBarStyle("light-content");
    }

    render() {
        const rotationStyle = {
            transform: [
                {
                    rotate: this.imageAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "360deg"]
                    })
                }
            ]
        };

        return (
                <ImageBackground
                style={styles.backgroundImage}
                imageStyle={{resizeMode: 'cover'}}
                source={require("./assets/museum3.jpg")}
                blurRadius={7.5}>
                <View style={styles.appHeader}>
                    <Animated.Image
                        style={[styles.headerImage]}
                        resizeMode={"contain"}
                        source={require("./assets/bampfa_logo.png")}
                    />
                </View>
                <View style={{ alignItems: "center", flex: 3 }}>
                    <Image
                    style={styles.titleImage}
                    resizeMode={"contain"}
                    source={require("./assets/essay_title_white.png")}
                    />
                </View>
                    <Image
                    style={styles.startImage}
                    resizeMode={"contain"}
                    source={require("./assets/start_arrow.png")}
                    />
                <Router>
                    <Switch hideNavBar={true}>
                        <Route exact path="/" component={Home} />
                        <Route path="/one" component={Other} />
                    </Switch>
                </Router>
                </ImageBackground>
        );
    }
}

const mapStateToProps = state => ({
    example: state.example
});

const bindActions = dispatch => ({
    exampleAction: () => dispatch(exampleAction())
});

export default connect(mapStateToProps, bindActions)(App);

const styles = StyleSheet.create({
    app: {
        flex: 1
    },
    appHeader: {
        flex: 1,
        // backgroundColor: "#222",
        padding: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundImage: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    titleImage: {
      width: 300,
      height: 300
    },
    headerImage: {
        width: 100,
        height: 100,
        flex: 1
    },
    startImage: {
      width: 50,
      height: 50,
      paddingRight: 15,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    appIntro: {
        flex: 1,
        fontSize: 30,
        textAlign: "center",
        color: "white"
    }
});
