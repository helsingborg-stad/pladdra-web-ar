import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  ThreeDemoScreen,
  ReactThreeArJsScreen,
  ReactThreeXrScreen,
} from "@app/screens";
import WebXRPolyfill from "webxr-polyfill";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const polyfill = new WebXRPolyfill();

ReactDOM.render(
  <React.StrictMode>
    <ReactThreeXrScreen />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
