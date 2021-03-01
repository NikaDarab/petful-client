import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Root from "./root/Root";
import { BrowserRouter } from "react-router-dom";
console.log(process.env);
ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.getElementById("root")
);
