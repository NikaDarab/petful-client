import React, { Component } from "react";

class People extends Component {
  render() {
    return (
      <>
        <div>
          {" "}
          <div className="listOfPeople">
            <p className="people">Queue of people</p>
            <ul>
              {this.props.people.map((person) => (
                <li key={this.props.people.indexOf(person)}>{person}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default People;
