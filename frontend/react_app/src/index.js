import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App3 } from "./App";
import reportWebVitals from "./reportWebVitals";
import FormInput from "./components/Form";

ReactDOM.render(
  <React.StrictMode>
    <FormInput />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
