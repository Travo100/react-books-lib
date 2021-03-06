import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className="navbar-brand">
        React Reading List
      </Link>
    </nav>
  );
}

export default Nav;
