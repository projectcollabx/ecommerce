import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/a&s_logo.png";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-black">
      <div className="container-fluid">
        <div className="logo-name">
          <img src={logo} alt="Logo" className="logo" />
          <p>A & S Ventures</p>
        </div>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item dropdown">
              {/* <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact
              </Link> */}
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/Contact">
                    Contact 1
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Contact">
                    Contact 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/About">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
