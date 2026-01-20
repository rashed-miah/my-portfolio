import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

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

function ProjectsComponent({ title, projects, activeTab, handleTabClick }) {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress(
        title === "Web Apps" ? 90 : title === "Android Apps" ? 70 : 80,
      );
    }, 100);
  }, [title]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Only show first 3 projects
  const displayedProjects = projects.slice(0, 3);

  return (
    <div className="projectsMainBox" id="projects">
      <div className="container">
        <h3>Projects</h3>
        <div className="progressBox">
          <ProgressBar progress={progress} />
        </div>
        <div className="projectBtns">
          <button
            style={
              activeTab === "webapps"
                ? {
                    background:
                      "linear-gradient(45deg, #0098a9 0%, #00d4ff 50%, #006d7a 100%)",
                  }
                : {}
            }
            onClick={() => handleTabClick("webapps")}
          >
            Web Apps
          </button>
          {/* <button 
                        style={activeTab === "android" ? {background: "linear-gradient(45deg, #0098a9 0%, #00d4ff 50%, #006d7a 100%)"} : {}} 
                        onClick={() => handleTabClick("android")}
                    > 
                        Android Apps 
                    </button> */}
          {/* <button
            style={
              activeTab === "others"
                ? {
                    background:
                      "linear-gradient(45deg, #0098a9 0%, #00d4ff 50%, #006d7a 100%)",
                  }
                : {}
            }
            onClick={() => handleTabClick("others")}
          >
            Others
          </button> */}
        </div>
        <div className="projectBox">
          <div className="allProjects">
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                className={`project project${index + 1}`}
                onClick={() => handleProjectClick(project)}
              >
                <img src={project.logo} alt={project.title} />
              </div>
            ))}
          </div>
          <div className="viewProjectsBox">
            <Link to={selectedProject.link}>
              <div className="viewProject">
                <div
                  className="imageBox project-logo-bg"
                  style={{
                    backgroundImage: `url(${selectedProject.image || selectedProject.image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                    transition: "background-position 3s ease",
                    height: "200px",
                  }}
                >
                  {/* <img src={selectedProject.image} alt={selectedProject.title} /> */}
                </div>
                <div className="contentBox">
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.details}</p>
                  <span>
                    <FontAwesomeIcon icon={selectedProject.icon} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {projects.length > 3 && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Link to={`/${activeTab}`}>
              <button
                style={{
                  padding: "10px 20px",
                  background:
                    "linear-gradient(45deg, #0098a9 0%, #00d4ff 50%, #006d7a 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Show More
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsComponent;
