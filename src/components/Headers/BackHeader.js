import React from "react";
import { withRouter } from 'react-router-dom';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MdArrowBack } from "react-icons/md";

import { Link } from "../../routers/Routing";
import styles from "./styles";

class BackHeader extends React.Component {
    render() {
        return (
            <View style={styles.headerContainer}>
                {/* MENU BUTTON */}
                <View
                    style={{
                        flex: 1,
                        alignSelf: "flex-start"
                    }}
                >
                    {/* redirect to current url, but navigate history backward */}
                    <Link to={this.props.match.url} onClick={this.props.history.goBack}>
                        <TouchableOpacity>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "flex-start"
                                }}
                            >
                                <Text
                                    style={{
                                        color: "black",
                                        fontSize: 30,
                                        padding: 20,
                                        textAlignVertical: "bottom"
                                    }}
                                >
                                    <Text style={{ textAlignVertical: "center" }}>
                                        <MdArrowBack />
                                    </Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </Link>
                </View>

                {/* LOGO */}
                <View style={{ alignItems: "center", alignSelf: "center", flex: 1 }}>
                    <Link to={"/"}>
                        <Image
                            style={{
                                width: 100,
                                height: 30,
                                resizeMode: "contain"
                            }}
                            source={require("../../assets/logo/logo.png")}
                        />
                    </Link>
                </View>

                {/* Dummy item to balance out centered logo */}
                <View style={{ alignSelf: "flex-end", flex: 1 }} />
            </View>
        );
    }
}

export default withRouter(BackHeader)
