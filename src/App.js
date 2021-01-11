import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/">
              <AboutMe />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/contact">
              <ContactMe />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  };
};

