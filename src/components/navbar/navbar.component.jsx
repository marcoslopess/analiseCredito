import React from "react";
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";

import "./navbar.styles.scss";
import Logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-md navbar-dark fixed-top "
        style={{ backgroundColor: "#4caf50" }}
      >
        <Link className="navbar-brand" to="/dashboard">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/dashboard">
                Inicio
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/operacoes">
                Operações
              </Link>
            </li>
          </ul>
          <button onClick="" className="profile-container-button" type="button">
            <FiPower size={18} color="#E02041" />
          </button>
        </div>
      </nav>
    </div>
  );
}
