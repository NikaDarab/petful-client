import React, { Component } from "react";

class People extends Component {
  render() {
    return (
      <>
        <div>
          {" "}
          <div className="listOfPeople">
            <h1 className="people">Queue of people</h1>
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
