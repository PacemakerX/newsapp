import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  c = "sparsh";
  render() {
    return (
      <div>Hello this is my first class based component website {this.c}</div>
    );
  }
}
