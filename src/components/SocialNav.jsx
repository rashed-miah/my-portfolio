import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../css/navbar.css";

function SocialNav() {
  return (
    <nav>
      <div className="container ">
        <div className="socialNavMenu">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/rashedul.gub.221"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={faFacebook} />
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:developer.rashedmiah@gmail.com">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rashedgub/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rashed-miah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </a>
            </li>
            <li>
              <a href="tel:+8801746050146">
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SocialNav;
