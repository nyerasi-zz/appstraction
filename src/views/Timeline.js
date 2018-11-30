import React from "react";
import { ScrollView, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { BackHeader } from "../components/Headers";
import { Title, SubTitle } from "../components/Text";
import { Accordion } from "../components/Accordion";
import { FullWidthImage } from "../components/Images";
import { TimelinePics } from "../components/Images";
const styles = EStyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "$primaryGray"
  }
});

export default class Timeline extends React.Component {
  render() {
    const artName = "Timeline";
    const artDetails = [];

    return (
      <View
        style={{
          flex: 1
        }}
      >
        <BackHeader />

        {/* CONTENT */}
        <View style={styles.mainView}>
        <Title>{Timeline}</Title>
          <ScrollView
            alwaysBounceVertical={true}
            contentContainerStyle={{ alignItems: "center" }}
            style={{
              flex: 1,
              width: "100%"
            }}
          >
            {artDetails ? (
              <View style={{ flex: 1, width: "90%" }}>
                <Accordion allowMultipleOpen>
                  <div label="1950" isOpen>
                    <TimelinePics
                      style={{ width: 200, height: 100 }}
                      source={require("../assets/sample.png")}
                      width={700}
                      height={500}
                    />
                    <TimelinePics
                      style={{ width: 200, height: 100 }}
                      source={require("../assets/raisonne3.jpg")}
                      width={700}
                      height={500}
                    />
                    <TimelinePics
                      style={{ width: 200, height: 100 }}
                      source={require("../assets/sample2.jpg")}
                      width={700}
                      height={500}
                    />
                  </div>
                  <div label="1960">
                  <TimelinePics
                    style={{ width: 200, height: 100 }}
                    source={require("../assets/sample.png")}
                    width={700}
                    height={500}
                  />
                  <TimelinePics
                    style={{ width: 200, height: 100 }}
                    source={require("../assets/raisonne3.jpg")}
                    width={700}
                    height={500}
                  />
                  <TimelinePics
                    style={{ width: 200, height: 100 }}
                    source={require("../assets/sample2.jpg")}
                    width={700}
                    height={500}
                  />
                  </div>
                  <div label="1970">
                  <TimelinePics
                    style={{ width: 200, height: 100 }}
                    source={require("../assets/sample.png")}
                    width={700}
                    height={500}
                  />
                  <TimelinePics
                    style={{ width: 200, height: 100 }}
                    source={require("../assets/raisonne3.jpg")}
                    width={700}
                    height={500}
                  />
                  <TimelinePics
                    style={{ width: 200, height: 100 }}
                    source={require("../assets/sample2.jpg")}
                    width={700}
                    height={500}
                  />
                  </div>
                  <div label="1980">
                  <TimelinePics
                    style={{ width: 200, height: 100 }}
                    source={require("../assets/sample.png")}
                    width={700}
                    height={500}
                  />
                  <TimelinePics
                    style={{ width: 200, height: 100 }}
                    source={require("../assets/raisonne3.jpg")}
                    width={700}
                    height={500}
                  />
                  <TimelinePics
                    style={{ width: 200, height: 100 }}
                    source={require("../assets/sample2.jpg")}
                    width={700}
                    height={500}
                  />
                  </div>
                </Accordion>
              </View>
            ) : (
              <Title>Artwork Not Found</Title>
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}
