import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  c = "sparsh";
  render() {
    return (
      <div>
        <Navbar/>
        <News  apiKey={"a6fe7a3ad3da4cc2901ca4064dccfd5f"}pageSize={3}/>
      </div>
    );
  }
}
