import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (

    <div className="head-1">
      <h1>Take your Quiz </h1>
      <div className="signForm">
        <Link to="/SignUp" style={{ textDecoration: "none" }}>
          <button className="signBtn">Sign-Up</button>
        </Link>

        <Link to="/SignIn" style={{ textDecoration: "none" }}>
          <button className="signBtn">Sign-In</button>
        </Link>
      </div>
    </div>

  );
}

export default Header;
