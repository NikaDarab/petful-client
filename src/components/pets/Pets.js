import React, { Component } from "react";
import DisplayPets from "./DisplayPets";
import People from "../people/People";
import Form from "./Form";
import config from "../../config";
import { createHashHistory } from "history";
export const history = createHashHistory();

class Pets extends Component {
  state = {
    dogs: [],
    cats: [],
    people: [
      "Randy Lahey",
      "Trevor Cory",
      "Jim Lahey",
      "Saron Yitebak",
      "Shahram Darab",
    ],
    currentUser: "",
    toggleForm: null,
    showMessage: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    this.setState({
      currentUser: name,
      toggleForm: true,
    });
    this.handlePost(name);
  };
  //post people
  handlePost = (person) => {
    const newPerson = {
      name: person,
    };
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    };

    fetch(`${config.API_ENDPOINT}/people`, postOptions)
      .then((res) => {
        if (!res.ok) {
          console.log({ res });
          console.log("something went wrong");
        }
      })
      .then(() => this.handleAddPerson(person))
      .then(() => this.startAdoption())

      .catch((err) => console.log(err));
  };
  //add people
  handleAddPerson = (person) => {
    this.setState({
      people: [...this.state.people, person],
    });
  };

  //adoption started
  startAdoption = () => {
    setInterval(() => {
      let currentName = this.state.currentUser;
      if (!this.state.people.includes(currentName)) {
        console.log("current user is the list");
        this.setState({
          toggleForm: false,
        });
      }
      if (this.state.people.length < 6) {
        if (!this.state.people.includes("Alex Samoa")) {
          this.setState({
            people: [...this.state.people, "Alex Samoa"],
          });
        } else if (!this.state.people.includes("Mason Sadr")) {
          this.setState({
            people: [...this.state.people, "Mason Sadr"],
          });
        } else if (!this.state.people.includes("Tawney Newsome")) {
          this.setState({
            people: [...this.state.people, "Tawney Newsome"],
          });
        } else if (!this.state.people.includes("Eva Sanati")) {
          this.setState({
            people: [...this.state.people, "Eva Sanati"],
          });
        } else if (!this.state.people.includes("Caroline Jafari")) {
          this.setState({
            people: [...this.state.people, "Caroline Jafari"],
          });
        } else if (!this.state.people.includes("Shole Sharifi")) {
          this.setState({
            people: [...this.state.people, "Shole Sharifi"],
          });
        }
      }
      let random = Math.random();
      if (this.state.people[0] !== this.state.currentUser) {
        if (random < 0.5) {
          this.handleAdoptDog();
        } else {
          this.handleAdoptCat();
        }
      } else if (!this.state.people.length) {
        this.setState({
          toggleForm: false,
        });
      }
    }, 5000);
  };

  handleAdoptDog = () => {
    this.handleAdoptPerson();
    this.state.people[0] === this.state.currentUser
      ? this.setState({
          showMessage: !this.state.showMessage,
        })
      : this.setState({
          showMessage: false,
        });

    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.API_KEY}`,
      },
    };
    fetch(`${config.API_ENDPOINT}/dogs`, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.error);
        }
      })
      .then(() =>
        this.setState({
          dogs: this.state.dogs.slice(1),
        })
      );
  };

  handleAdoptCat = () => {
    this.state.people[0] === this.state.currentUser
      ? this.setState({
          showMessage: !this.state.showMessage,
        })
      : this.setState({
          showMessage: false,
        });
    this.handleAdoptPerson();
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.API_KEY}`,
      },
    };
    fetch(`${config.API_ENDPOINT}/cats`, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.error);
        }
      })
      .then(() =>
        this.setState({
          cats: this.state.cats.slice(1),
        })
      );
  };

  handleAdoptPerson = () => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.API_KEY}`,
      },
    };
    fetch(`${config.API_ENDPOINT}/people`, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.error);
        }
      })
      .then(() =>
        this.setState({
          people: this.state.people.slice(1),
        })
      );
  };

  componentDidMount() {
    const options = {
      headers: {
        Authorization: `Bearer ${config.API_KEY}`,
      },
    };
    //get dogs
    fetch(`${config.API_ENDPOINT}/dogs`, options)
      .then((res) => res.json())
      .then((dogs) => this.setState({ dogs }))
      .catch((err) => console.log(err));

    //get cats
    fetch(`${config.API_ENDPOINT}/cats`, options)
      .then((res) => res.json())
      .then((cats) => this.setState({ cats }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        {this.state.dogs.length && this.state.cats.length ? (
          <div>
            <People people={this.state.people}></People>
            {this.state.showMessage ? <h1>You adopted a pet!</h1> : null}
            <Form
              toggleForm={this.state.toggleForm}
              handleSubmit={this.handleSubmit}
            />

            <div className="displayPets">
              <button
                className="adopt"
                disabled={this.state.people[0] !== this.state.currentUser}
                onClick={this.handleAdoptDog}
              >
                adopt
              </button>
              <DisplayPets
                pets={this.state.dogs}
                handleAdopt={this.handleAdoptDog}
              />
            </div>

            <div className="displayPets">
              <button
                className="adopt"
                disabled={this.state.people[0] !== this.state.currentUser}
                onClick={this.handleAdoptCat}
              >
                adopt
              </button>
              <DisplayPets
                pets={this.state.cats}
                handleAdopt={this.handleAdoptCat}
              />
            </div>
          </div>
        ) : (
          <h2>End of the list</h2>
        )}
      </>
    );
  }
}

export default Pets;
