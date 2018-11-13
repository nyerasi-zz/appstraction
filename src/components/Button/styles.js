import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  // MenuButton
  menuButton: {
    alignItems: "center",
    padding: 15,
    margin: 15,
    width: "80%",
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonIcon: {
    padding: "0 10"
  },

  // SkipTutorialButton
  skipTutorialButton: {
    width: "80%",
    margin: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 4,

    shadowColor: "#D7D7D7",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 0.5
  },
  mainText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontFamily: "Gotham Book, sans-serif",
    fontSize: 15
  },
  arrowText: {
    fontFamily: "Gotham Book, sans-serif",
    fontSize: 15,
    textAlign: "center",
    paddingTop: 5
  },
  redArrow: {
    color: "red",
    fontWeight: "bold",
    fontSize: 30,
    textAlignVertical: "center"
  }
});
