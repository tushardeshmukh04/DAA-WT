import React from "react";
import "./Nav1.css"; // Make sure the CSS file path is correct.

function Nav1() {
  return (
    <>
      <header>
        <h1>Welcome to Mahii Restaurant</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav1;
