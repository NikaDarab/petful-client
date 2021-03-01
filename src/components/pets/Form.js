import React, { Component } from "react";
class Form extends Component {
  render() {
    return (
      <>
        <form className="listOfPets" onSubmit={this.props.handleSubmit}>
          <label htmlFor="name">
            <input type="text" placeholder="joe" name="name" required />
            <button disabled={this.props.toggleForm}>add your name</button>
          </label>
        </form>
      </>
    );
  }
}

export default Form;
