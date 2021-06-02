import React from "react";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import {Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
