import React, { Component } from "react";
import People from "../../src/components/people/People";
import Pets from "../components/pets/Pets";
import { Route } from "react-router-dom";
import LandingPage from "../components/landingPage/LandingPage";
import AdoptionPage from "../components/adoptionPage/AdoptionPage";

class Root extends Component {
  render() {
    return (
      <div>
        {/* <LandingPage /> */}
        <Route exact path="/" component={LandingPage} />
        <Route path="/pets" component={Pets} />

        <Route path="/people" component={People} />
        <Route path="/adoptionPage" component={AdoptionPage} />
      </div>
    );
  }
}

export default Root;
