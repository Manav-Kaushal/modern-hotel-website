// Class based Component
import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { navLinks } from "../utils/mocks/NavbarData";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <div className="">
                <img src={logo} alt="" />
              </div>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaBars className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            {navLinks.map((data) => {
              return (
                <li>
                  <Link to={data.path} onClick={this.handleToggle}>
                    {data.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
