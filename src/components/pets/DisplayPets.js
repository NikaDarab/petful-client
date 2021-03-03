import React, { Component } from "react";
class DisplayPets extends Component {
  render() {
    return (
      <>
        <ul className="pets">
          <li className="list-of-Pets" key={this.props.pets[0].name}>
            <img
              className="pet-img"
              src={this.props.pets[0].imageURL}
              alt={this.props.pets[0].name}
            />
            <h3>Name:{this.props.pets[0].name}</h3>
            <li>Age: {this.props.pets[0].age}</li>
            <li>Breed: {this.props.pets[0].breed}</li>
            <li>Gender: {this.props.pets[0].gender}</li>
            <li>Description: {this.props.pets[0].description}</li>
            <li>Story: {this.props.pets[0].story}</li>
          </li>
        </ul>
      </>
    );
  }
}

export default DisplayPets;
