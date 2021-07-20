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

reportWebVitals();
