import React from "react";
import "../css/about.css";
import AboutAnimaiton from "./animations/AboutAnimation";

function About() {
  return (
    <div className="container" id="about">
      <div className="aboutBox">
        <div className="aboutImg">
          {/* <img src={aboutEmonImg} alt="about" /> */}
          <AboutAnimaiton />
        </div>
        <div className="aboutDetails">
          <h3>About Me</h3>
          <p className="about-text">
            My journey into web development began during my college years with
            <b> digital marketing</b> and <b>Shopify</b> theme customization.
            While analyzing websites for marketing purposes, I became fascinated
            by how websites are designed and how their functionality works
            behind the scenes. That curiosity slowly turned into a strong
            interest in <b>coding</b> and <b>web development</b>. Motivated to
            deepen my technical knowledge, I got admitted to the{" "}
            <b>Computer Science & Engineering (CSE) program</b> at{" "}
            <b>Green University of Bangladesh</b>, where I began building a
            strong foundation in software development. Today, I’m a{" "}
            <b>Full Stack Web Developer</b> who loves transforming ideas into
            real-world, high-performance web applications. I specialize in
            creating scalable, user-friendly frontends with <b>React.js</b>,
            focusing on clean UI, smooth interactions, and responsive design. On
            the backend, I build robust, secure, and efficient systems using
            <b>Node.js</b>, <b>Express.js</b>, and <b>MongoDB</b>, ensuring
            reliability, performance, and scalability across applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
