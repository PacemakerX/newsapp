import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News
                    key="general"
                    apiKey={"a6fe7a3ad3da4cc2901ca4064dccfd5f"}
                    pageSize={6}
                    country={"in"}
                    category={"general"}
                  />
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <News
                    key="business"
                    apiKey={"a6fe7a3ad3da4cc2901ca4064dccfd5f"}
                    pageSize={6}
                    country={"in"}
                    category={"business"}
                  />
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    key="entertainment"
                    apiKey={"a6fe7a3ad3da4cc2901ca4064dccfd5f"}
                    pageSize={6}
                    country={"in"}
                    category={"entertainment"}
                  />
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <News
                    key="health"
                    apiKey={"a6fe7a3ad3da4cc2901ca4064dccfd5f"}
                    pageSize={6}
                    country={"in"}
                    category={"health"}
                  />
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <News
                    key="science"
                    apiKey={"a6fe7a3ad3da4cc2901ca4064dccfd5f"}
                    pageSize={6}
                    country={"in"}
                    category={"science"}
                  />
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <News
                    key="sports"
                    apiKey={"a6fe7a3ad3da4cc2901ca4064dccfd5f"}
                    pageSize={6}
                    country={"in"}
                    category={"sports"}
                  />
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <News
                    key="technology"
                    apiKey={"a6fe7a3ad3da4cc2901ca4064dccfd5f"}
                    pageSize={6}
                    country={"in"}
                    category={"technology"}
                  />
                }
              />
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}
