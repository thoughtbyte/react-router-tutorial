import React from "react";

import "./css/NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navbar" aria-label="main navigation">
      <a className="nav-item">Home</a>
      <a className="nav-item">About</a>
      <a className="nav-item">People</a>
    </nav>
  );
};
