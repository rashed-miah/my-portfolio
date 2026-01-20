import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFileLines,
  faAddressBook,
} from "@fortawesome/free-regular-svg-icons";
import {
  faDiagramProject,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../css/navbar.css";

function Navbar() {
  const [smDeviceMenu, setSmDeviceMenu] = useState({});

  const openSMDeviceMenu = () => {
    const openMode = {
      right: "0px",
    };
    setSmDeviceMenu(openMode);
  };
  const closeMblMenu = () => {
    const closeMode = {
      right: "-100%",
    };
    setSmDeviceMenu(closeMode);
  };

  return (
    <nav>
      <div className="container menuMid">
        <div className="logo">
          <NavLink className="navbar-brand" to="/">
            Rashed
          </NavLink>
        </div>
        <div className="mainMenu" style={smDeviceMenu}>
          <button className="mblMenuCross" onClick={closeMblMenu}>
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <ul>
            <li>
              <a href="#about">
                <span>
                  <FontAwesomeIcon icon={faUser} />
                </span>
                About
              </a>
            </li>
            <li>
              {/* this file should be updated */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={faFileLines} />
                </span>
                Resume
              </a>
            </li>
            <li>
              <a href="#projects">
                <span>
                  <FontAwesomeIcon icon={faDiagramProject} />
                </span>
                Projects
              </a>
            </li>
            {/* <li>
              <a href="#certifications">
                <span>
                  <FontAwesomeIcon icon={faCertificate} />
                </span>
                Certificate
              </a>
            </li> */}
            <li>
              <a href="#contact">
                <span>
                  <FontAwesomeIcon icon={faAddressBook} />
                </span>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* for toggle manu in small device */}
        <button onClick={openSMDeviceMenu} className="navbarToggler">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
