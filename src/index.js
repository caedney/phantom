import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";

import store from "./store/store";

import App from "./containers/App/App";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: #e5e5e5;
    font-size: 16px;
    line-height: 1;
  }
`;

function Root() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
