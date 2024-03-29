//IMPORTANT THIS POLYFILL MUST BE INCLUDED BEFORE any RNW (react-native) imports
import "resize-observer-polyfill/dist/ResizeObserver.global";

import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import EStyleSheet from "react-native-extended-stylesheet";

import store from "./redux/configureStore";
import "./index.css";
import App from "./App";
// import registerServiceWorker from "./service_worker/registerServiceWorker";
import "./App.css";

// place default colors here, and reference them in styles.js files
EStyleSheet.build({
  $primaryBlue: "#4f6d7a",
  $primaryOrange: "#D57A66",
  $primaryGreen: "#00bd9d",
  $primaryPurple: "#9e768f",
  $primaryGray: "#FAFAFA",

  $white: "#fff",
  $border: "#e2e2e2",
  $inputText: "#797979",
  $darkText: "#343434"
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
