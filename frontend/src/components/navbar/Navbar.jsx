import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarBtn">
        <Link to="/register" style={{ textDecoration: "none" }}>
          <span>Sign up</span>
        </Link>
      </div>
      <div className="navbarBtn">
        <Link to="/login" style={{ textDecoration: "none" }}>
          Login
        </Link>
      </div>
      <div className="navbarBtn">
        <Link to="/userList" style={{ textDecoration: "none" }}>
          User list
        </Link>
      </div>
    </div>
  );
}
