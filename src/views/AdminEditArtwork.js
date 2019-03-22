import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  ScrollView,
  Button,
  Image,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";
import QRCode from "qrcode-svg";
import Modal from "react-modal";

import { BackHeader } from "../components/Headers";
import { FullWidthImage } from "../components/Images";
import { SubTitle } from "../components/Text";
import { AutoGrowTextInput } from "../components/Inputs";
import { FileUploader } from "../components/Uploader";
import firebase from "../data/firebase";

const styles = EStyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
    padding: 10
  },
  mainView: {
    backgroundColor: "$primaryGray"
  }
});

export default class AdminEditArtwork extends React.Component {
  state = {
    urlName: "",
    name: "",
    background: "",
    materials: "",
    technique: "",
    videoID: "",
    audioFileLink: "",
    audioFileName: "",
    audioText: "",
    photoFileLink: "",
    photoFileName: "",

    modalVisible: false,
    dataLoaded: false,
    invalidUrlErrorMessage: null,
    saveResult: null,
    disableLivePreview: false
  };

  componentDidMount() {
    const urlName = this.props.match.params.urlName;

    this.setState({
      urlName
    });

    // FETCH DATA
    firebase
      .database()
      .ref()
      .once("value")
      .then(snapshot => {
        // TODO: error check here
        let artDetails = snapshot.val()[urlName];

        this.setState({
          dataLoaded: true,
          name: artDetails.name,
          background: artDetails.background,
          materials: artDetails.materials,
          technique: artDetails.technique,
          videoID: artDetails.videoID,
          audioFileLink: artDetails.audioFileLink,
          audioFileName: artDetails.audioFileName,
          audioText: artDetails.audioText,
          photoFileLink: artDetails.photoFileLink,
          photoFileName: artDetails.photoFileName
        });
      })
      .catch(error => {
        this.setState({
          dataLoaded: true,
          name: "",
          background: "",
          materials: "",
          technique: "",
          videoID: "",
          audioFileLink: "",
          audioFileName: "",
          audioText: "",
          photoFileLink: "",
          photoFileName: ""
        });
      });
  }

  disableLivePreviewButton = () => {
    this.setState({
      disableLivePreview: true,
      saveResult: null
    });
  };

  isValidUrl = val => {
    return !val.split("").some(ch => "[]/.#$".includes(ch));
  };

  handleNewUrl = newUrl => {
    this.setState({ urlName: newUrl });
    this.disableLivePreviewButton();

    // check for invalid firebase characters
    if (!this.isValidUrl(newUrl))
      this.setState({
        invalidUrlErrorMessage: "Invalid URL, please try again"
      });
    else this.setState({ invalidUrlErrorMessage: null });
  };

  downloadQRCode = () => {
    const qrCode = new QRCode({
      content: "https://bampfa.now.sh/artworks/" + this.state.urlName,
      padding: 4,
      width: 256,
      height: 256,
      color: "#000000",
      background: "#ffffff",
      ecl: "M"
    }).svg();

    let element = document.createElement("a");
    let file = new Blob([qrCode], { type: "image/svg" });
    element.href = URL.createObjectURL(file);
    element.download = this.state.urlName + ".svg";
    element.click();
  };

  saveToFirebase = () => {
    if (this.state.invalidUrlErrorMessage) {
      alert(this.state.invalidUrlErrorMessage);
      return;
    }

    // copy state, remove unrelated keys
    let newState = JSON.parse(JSON.stringify(this.state));
    delete newState.dataLoaded;
    delete newState.invalidUrlErrorMessage;
    delete newState.modalVisible;
    delete newState.saveResult;
    delete newState.disableLivePreview;

    firebase
      .database()
      .ref(this.state.urlName)
      .update(
        newState,
        function(error) {
          if (error) {
            // The write failed...
            this.setState({
              saveResult: "The save failed. Please try again.\n" + error
            });
          } else {
            // Data saved successfully!
            this.setState({ saveResult: "Save successful!" });
          }
        }.bind(this)
      );

    this.setState({ disableLivePreview: false });
  };

  render() {
    // LOADING ICON
    let viewToRender = (
      <Image
        style={{ marginTop: 100, width: 100, height: 100 }}
        source={require("../assets/loading.gif")}
      />
    );

    // EDITING VIEW
    const EditingView = (
      <ScrollView
        alwaysBounceVertical={true}
        style={{ flex: 1, paddingHorizontal: "10%" }}
      >
        <Modal
          isOpen={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: false });
          }}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)"
            }
          }}
          contentLabel="New Artwork"
          ariaHideApp={false}
        >
          <View
            style={{
              flex: 0,
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <TouchableHighlight
              onPress={() => {
                this.setState({ modalVisible: false });
              }}
            >
              <Text>
                <b>X</b>
              </Text>
            </TouchableHighlight>
          </View>

          <View style={{ flex: 1, alignContent: "center" }}>
            <SubTitle>
              Did You Save?
              <br />
            </SubTitle>
            <br />
            <Button
              onPress={this.props.history.goBack}
              title="Yes"
              color="#4CD964"
            />
            <Button
              onPress={() => this.setState({ modalVisible: false })}
              title="No"
              color="#DC5249"
            />
          </View>
        </Modal>

        <Text style={{ textAlign: "right" }}>
          <Button
            title="View Live Page"
            onPress={() =>
              this.props.history.push("/artworks/" + this.state.urlName)
            }
            color="#4CD964"
            disabled={this.state.disableLivePreview}
          />
          {this.state.disableLivePreview && (
            <Text>
              <br />
              Press save to view live page.
            </Text>
          )}
        </Text>
        <br />

        <SubTitle>Unique Url Extension</SubTitle>
        <TextInput
          style={styles.textInput}
          placeholder="Url Name"
          onChangeText={this.handleNewUrl}
          value={this.state.urlName}
        />
        {this.state.invalidUrlErrorMessage && (
          <Text style={{ color: "red" }}>
            {this.state.invalidUrlErrorMessage}
          </Text>
        )}
        <Text>
          Warning: QR Codes are generated based on this value. You may need to
          re-print the QR code if you change it.
          <br />
          Also, changing this value will generate an entirely new entry (the old
          one will still exist).
        </Text>
        <br />

        <SubTitle>QR Code</SubTitle>
        <Text>
          <Button title="Generate QR Code" onPress={this.downloadQRCode} />
        </Text>
        <br />

        <SubTitle>Artwork Title</SubTitle>
        <TextInput
          style={styles.textInput}
          placeholder="Artwork Title"
          onChangeText={name => {
            this.disableLivePreviewButton();
            this.setState({ name });
          }}
          value={this.state.name}
        />
        <br />

        <SubTitle>Artwork Information</SubTitle>
        <AutoGrowTextInput
          style={styles.textInput}
          placeholder="Background"
          onChangeText={background => {
            this.disableLivePreviewButton();
            this.setState({ background });
          }}
          value={this.state.background}
        />
        <Text>
          This section will render as HTML, so you can
          {" <i>italicize</i>, <b>bold</b>, and <u>underline</u> "} using the
          appropriate tags. You can also add line breaks with {"<br/>"}.
          <br />
          <b>Please note:</b> some characters may not render properly, please
          double check that they do on the live page.
        </Text>
        <br />

        <SubTitle>Materials</SubTitle>
        <AutoGrowTextInput
          style={styles.textInput}
          placeholder="Materials"
          onChangeText={materials => {
            this.disableLivePreviewButton();
            this.setState({ materials });
          }}
          value={this.state.materials}
        />
        <br />

        <SubTitle>Technique</SubTitle>
        <AutoGrowTextInput
          style={styles.textInput}
          placeholder="Technique"
          onChangeText={technique => {
            this.disableLivePreviewButton();
            this.setState({ technique });
          }}
          value={this.state.technique}
        />
        <br />

        <SubTitle>Video ID</SubTitle>
        <TextInput
          style={styles.textInput}
          placeholder="Youtube Video ID"
          onChangeText={videoID => {
            this.disableLivePreviewButton();
            this.setState({ videoID });
          }}
          value={this.state.videoID}
        />
        <Text>
          Note: This is the unique ~11 character Youtube ID in the link, as
          found here:
          <br />
          <ul>
            <li>
              https://www.youtube.com/watch?v=<b>VIDEO_ID</b>
            </li>
            <li>
              https://www.youtu.be/<b>VIDEO_ID</b>
            </li>
          </ul>
        </Text>
        <br />

        <SubTitle>Audio File</SubTitle>
        <Text>
          Currently loaded:{" "}
          {this.state.audioFileLink !== "" ? (
            <div label="Audio">
              <audio controls>
                <source src={this.state.audioFileLink} />
              </audio>
            </div>
          ) : (
            <b>None</b>
          )}
        </Text>
        <Text>Replace with:</Text>
        <FileUploader
          savePath={this.state.urlName}
          fileType="audio"
          storeDownloadLink={(downloadLink, fileName) => {
            this.disableLivePreviewButton();
            this.setState({
              audioFileLink: downloadLink,
              audioFileName: fileName
            });
          }}
        />
        <br />

        <SubTitle>Audio Text</SubTitle>
        <AutoGrowTextInput
          style={styles.textInput}
          placeholder="Audio Text"
          onChangeText={audioText => {
            this.disableLivePreviewButton();
            this.setState({ audioText });
          }}
          value={this.state.audioText}
        />
        <br />

        <SubTitle>Photo File</SubTitle>
        <Text>
          Currently loaded:{" "}
          {this.state.photoFileLink !== "" ? (
            <FullWidthImage
              style={{ width: "100%" }}
              source={{ uri: this.state.photoFileLink }}
              width={400}
              height={300}
            />
          ) : (
            <b>None</b>
          )}
        </Text>
        <Text>Replace with:</Text>
        <FileUploader
          savePath={this.state.urlName}
          fileType="photo"
          storeDownloadLink={(downloadLink, fileName) => {
            this.disableLivePreviewButton();
            this.setState({
              photoFileLink: downloadLink,
              photoFileName: fileName
            });
          }}
        />
        <br />

        <Button
          title="Save Content"
          onPress={this.saveToFirebase}
          color="#4CD964"
        />
        {this.state.saveResult && <Text>{this.state.saveResult}</Text>}
        <br />
        <br />
      </ScrollView>
    );

    if (this.state.dataLoaded) viewToRender = EditingView;

    return (
      <View style={[styles.mainView, { flex: 1 }]} className="back-item">
        <BackHeader
          onClick={
            this.state.disableLivePreview
              ? () => {
                  this.setState({ modalVisible: true });
                }
              : null
          }
        />
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          {viewToRender}
        </View>
      </View>
    );
  }
}
