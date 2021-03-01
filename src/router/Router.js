import React from "react";
import { Route } from "react-router-dom";
import App from "../root/Root";
import Cats from "../components/cats/Cats";
import Dogs from "../components/dogs/Dogs";
let Router = () => {
  return (
    <>
      <Route exact path="/" component={App} />
      <Route path="/cats" component={Cats} />
      <Route path="/dogs" component={Dogs} />
    </>
  );
};

export default Router;
