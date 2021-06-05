import React from "react";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Bookings from "./pages/Bookings";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route path="/about-us" exact component={About} />
        <Route path="/contact-us" exact component={Contact} />
        <Route path="/book-a-room" exact component={Bookings} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
