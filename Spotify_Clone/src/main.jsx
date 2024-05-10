import React from "react";
import "./style.css";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./stores";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
