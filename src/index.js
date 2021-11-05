import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";

//const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
//const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

/** Get your free Moralis Account https://moralis.io/ */
ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="RBkjXdys1eSJpAebehyb7SiB6j3cot5CNr9Mj60o" serverUrl="https://eafmte6garvt.usemoralis.com:2053/server">
      <MoralisDappProvider>
        <App />
      </MoralisDappProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
