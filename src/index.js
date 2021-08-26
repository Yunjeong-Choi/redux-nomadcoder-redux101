import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";
import Home from "./routes/Home";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
