import React, { useState, useEffect } from "react";
import "../css/header.css";
import headerRashedImg from "../images/PP2.png";

function Header() {
  const roles = ["Full-Stack Developer"];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];

      if (isDeleting) {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        setTypeSpeed(75);
      } else {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        setTypeSpeed(150);
      }

      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typeSpeed, roles]);

  return (
    <div className="header">
      <div className="headerMid">
        <div className="headerImg">
          <img src={headerRashedImg} alt="Rashed" />
        </div>
        <div className="headerContent">
          <h4>Hey</h4>
          <h1>
            This is <span>Md. Rashed Miah</span>
          </h1>
          <h4>
            I am a{" "}
            <span className="typewriter-container">
              <span className="typewriter">{currentText}</span>
              <span className="cursor">|</span>
            </span>
          </h4>
          <p>
            A passionate and dynamic full-stack developer crafting real-world,
            impact-driven solutions across e-commerce, portfolio, and real-time
            platforms. Explore a showcase of intuitive, scalable
            applications—built with modern technologies like javascript, React,
            Node.js, and MongoDB.
          </p>
        </div>
        <div className="headerBtns">
          <button>Learn More</button>
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
