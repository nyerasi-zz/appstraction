import React from "react";
import { ScrollView, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { BackHeader } from "../components/Headers";
import { Title } from "../components/Text";

const styles = EStyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "$primaryGray"
  }
});

export default class Page404 extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
        className="back-item"
      >
        <BackHeader />

        {/* CONTENT */}
        <View style={styles.mainView}>
          <ScrollView
            bounces={false}
            contentContainerStyle={{ alignItems: "center" }}
            style={{
              flex: 1,
              width: "100%",
              paddingBottom: 40
            }}
          >
            <Title
              style={{ marginTop: 100, textAlign: "center", lineHeight: "1.3" }}
            >
              404: Page not found
              <br />
              <span role="img" aria-label="painter emoji">
                😢🖼
              </span>
            </Title>
          </ScrollView>
        </View>
      </View>
    );
  }
}
