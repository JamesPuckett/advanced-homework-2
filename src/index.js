import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

function render() {
  let currentCategory = state.products;
  console.log("index current cat", currentCategory);
  function changeCategory(category) {
    currentCategory = category;
    render(currentCategory);
  }
  ReactDOM.render(
    <App state={state} cat={changeCategory} />,
    document.getElementById("root")
  );
}
render();

