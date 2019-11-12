import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a>GOOGLE BOOK SEARCHER</a>
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className="navbar-brand" href="/">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
