import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootReducer from "./reducers/root";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { getAuthInfo } from "./utils.js";
import { LOGIN_USER_SUCCESSFUL, LOGIN_USER_FAILED } from "./constants";

const store = createStore(rootReducer, applyMiddleware(thunk));

// Load store with AuthInfo if available.
let authInfo = getAuthInfo();
if (authInfo && Object.keys(authInfo).length) {
  store.dispatch({ type: LOGIN_USER_SUCCESSFUL, payload: authInfo });
} else {
  store.dispatch({ type: LOGIN_USER_FAILED });
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
