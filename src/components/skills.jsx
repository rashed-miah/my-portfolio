import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import "../css/skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import gitLogo from "../images/skillsLogo/git.png";
import cpp from "../images/skillsLogo/cpp.png";
import css from "../images/skillsLogo/css.png";
import java from "../images/skillsLogo/java.png";
import javascript from "../images/skillsLogo/javascript.png";
import html from "../images/skillsLogo/html.png";

import cProgramming from "../images/skillsLogo/c-programming.png";
import reactNative from "../images/skillsLogo/react-native.png";
import nodejs from "../images/skillsLogo/nodejs.png";

import postgresql from "../images/skillsLogo/postgresql.png";
import expressjs from "../images/skillsLogo/express-js.png";
import mongodb from "../images/skillsLogo/mongodb.png";
import typescript from "../images/skillsLogo/typescript.png";
import tailwindcss from "../images/skillsLogo/tailwindcss.png";

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

function Skills() {
  const [progress, setProgress] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [radius, setRadius] = useState(220);

  const [shadowLeft, setShadowLeft] = useState({
    boxShadow:
      "5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.1)",
  });
  const [shadowRight, setShadowRight] = useState({
    boxShadow:
      "5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.1)",
  });

  const items = [
    { id: 1, image: reactNative, progress: 70 },
    { id: 2, image: gitLogo, progress: 40 },
    { id: 3, image: css, progress: 80 },
    { id: 4, image: html, progress: 80 },
    { id: 5, image: javascript, progress: 70 },
    { id: 6, image: mongodb, progress: 80 },
    { id: 7, image: expressjs, progress: 60 },
    { id: 8, image: tailwindcss, progress: 90 },
    { id: 9, image: cProgramming, progress: 60 },
    { id: 10, image: nodejs, progress: 50 },
  ];

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 392) setRadius(80);
      else if (width < 500) setRadius(90);
      else if (width < 768) setRadius(120);
      else if (width < 900) setRadius(150);
      else setRadius(220);
    };

    updateRadius(); // Initial
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setProgress(70);
    }, 100);
  }, []);

  const transitions = useTransition(selectedIndex, {
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  const handleItemClick = (index) => {
    setSelectedIndex(index);
    if (items[index].progress) setProgress(items[index].progress);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? items.length - 1 : prevIndex - 1;
      setProgress(items[newIndex].progress);
      return newIndex;
    });
    setShadowLeft({
      boxShadow:
        "inset 3px 4px 3px rgba(0, 0, 0, 0.3), inset -4px -3px 5px rgba(255, 255, 255, 0.1)",
    });
    setTimeout(() => {
      setShadowLeft({
        boxShadow:
          "5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.1)",
      });
    }, 200);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => {
      const newIndex = prevIndex === items.length - 1 ? 0 : prevIndex + 1;
      setProgress(items[newIndex].progress);
      return newIndex;
    });
    setShadowRight({
      boxShadow:
        "inset 3px 4px 3px rgba(0, 0, 0, 0.3), inset -4px -3px 5px rgba(255, 255, 255, 0.1)",
    });
    setTimeout(() => {
      setShadowRight({
        boxShadow:
          "5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.1)",
      });
    }, 200);
  };

  return (
    <div className="container">
      <div className="skillMainBox">
        <div className="skillHeading">
          <h3>Skills</h3>
        </div>
        <ProgressBar progress={progress} />
        <div className="languagesBtnBox">
          <button>Languages</button>
        </div>
        <div className="carousel">
          <div className="main-item">
            {transitions((style, index) => (
              <animated.div
                key={items[index].id}
                className="item"
                style={{
                  ...style,
                  backgroundImage: `url(${items[index].image})`,
                }}
              />
            ))}
          </div>
          <div className="skills-nav-buttons">
            <button style={shadowLeft} onClick={handlePrev}>
              <FontAwesomeIcon icon={faCaretLeft} />
            </button>
            <button style={shadowRight} onClick={handleNext}>
              <FontAwesomeIcon icon={faCaretRight} />
            </button>
          </div>
          <div className="small-items">
            {items.map((item, index) => (
              <animated.div
                key={item.id}
                className={`small-item ${index === selectedIndex ? "active" : ""}`}
                style={{
                  transform: `rotate(${(index * 360) / items.length}deg) translateX(${radius}px) rotate(${-(index * 360) / items.length}deg)`,
                }}
                onClick={() => handleItemClick(index)}
              >
                <img src={item.image} alt={`Image ${index + 1}`} />
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
