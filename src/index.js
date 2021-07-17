import "./index.css";

import Header from "./components/Header";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { Store } from "./redux/store/store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Header />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
