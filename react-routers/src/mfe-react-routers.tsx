import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Route from "./routes/Route";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Route,
});

export const { bootstrap, mount, unmount } = lifecycles;
