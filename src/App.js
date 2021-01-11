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
        <Router>
          <Navbar />
            <Switch>
              <Route exact path="/" component={AboutMe} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={ContactMe} />
            </Switch>
          <Footer />
        </Router>
        
      </div>
    );
  };
};

