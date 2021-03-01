import React, { Component } from "react";
class DisplayPets extends Component {
  render() {
    return (
      <>
        <ul>
          <li className="pets" key={this.props.pets[0].name}>
            <img
              className="pet-img"
              src={this.props.pets[0].imageURL}
              alt={this.props.pets[0].name}
            />
            <h1>{this.props.pets[0].name}</h1>
            <p>Age : {this.props.pets[0].age}</p>
            <p>Breed: {this.props.pets[0].breed}</p>
            <p>Gender: {this.props.pets[0].gender}</p>
            <p>Description: {this.props.pets[0].description}</p>
            <p>Story: {this.props.pets[0].story}</p>
            <br />
          </li>
        </ul>
      </>
    );
  }
}

export default DisplayPets;
