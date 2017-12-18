import React from "react";
import { NavLink } from "react-router-dom";

import "./css/NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navbar" aria-label="main navigation">
      <NavLink to="/" exact className="nav-item" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-item" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/people" className="nav-item" activeClassName="active">
        People
      </NavLink>
    </nav>
  );
};
