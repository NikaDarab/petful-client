import React, { Component } from "react";
class DisplayPets extends Component {
  render() {
    return (
      <>
        <div className="pets-list">
          <ul>
            <li className="pets" key={this.props.pets[0].name}>
              <img
                className="pet-img"
                src={this.props.pets[0].imageURL}
                alt={this.props.pets[0].name}
              />
              <h3>{this.props.pets[0].name}</h3>
              <p>Age : {this.props.pets[0].age}</p>
              <p>Breed: {this.props.pets[0].breed}</p>
              <p>Gender: {this.props.pets[0].gender}</p>
              <p>Description: {this.props.pets[0].description}</p>
              <p>Story: {this.props.pets[0].story}</p>
              <br />
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default DisplayPets;
