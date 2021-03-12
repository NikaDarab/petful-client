import React from "react";
import { Link } from "react-router-dom";
import fifoImg from "../assets/FIFO.png";

let LandingPage = () => {
  return (
    <>
      <nav>
        <Link className="logo" to="/">
          Petful
        </Link>
        <Link to="/adoptionPage">Start to adopt</Link>
      </nav>
      <h2 className="welcome">Welcome to FIFO Petful! </h2>
      <p className="intro">
        With more than 20 available cats and dogs every day, we’re sure to have
        the right pet for your family. At FIFO, you can find all breeds, ages,
        types and personality types.
      </p>
      <p className="intro">
        The adoption process works strictly on a "First-In, First-Out" basis.
        The FIFO is based on the animals that came to the shelter first. You can
        adopt a cat, or a dog, or both, but you may only adopt the animal that
        came to the shelter first. In addition, people who want to adopt are
        also put in a Queue so they can adopt when it's their turn.
      </p>{" "}
      <div className="animate__animated animate__fadeInLeftBig">
        <Link
          className="AdoptButton animate__animated animate__fadeInLeftBig"
          to="/adoptionPage"
        >
          ADOPT YOUR FURR BABY
        </Link>
      </div>
      <div>
        <img className="FIFOimg" src={fifoImg} alt="fifo img" />
      </div>
    </>
  );
};

export default LandingPage;
