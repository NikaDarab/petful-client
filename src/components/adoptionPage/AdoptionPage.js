import React, { Component } from "react";
import Pets from "../pets/Pets";
import { Link } from "react-router-dom";

class AdoptionPage extends Component {
  render() {
    return (
      <>
        <div>
          <nav>
            <Link className="logo" to="/">
              Petful
            </Link>
          </nav>
          <Pets />
        </div>
      </>
    );
  }
}

export default AdoptionPage;
