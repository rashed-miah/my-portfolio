import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/projects.css";
import projectImg from "../images/emon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProgressBar({ progress }) {
    return (
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
    );
}

function AndroidProject({ handleTabClick }) {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setProgress(50);
        }, 100);
    }, []);

    const [selectedProject, setSelectedProject] = useState(
        {
            title: "This is android project ",
            details: "This is details for project 1",
            image: projectImg,
            icon: faGithub,
            link: "https://www.facebook.com/"
        }
    );

    const handleProjectClick = (title, details, image, icon, link) => {
        setSelectedProject(
            {
                title: title,
                details: details,
                image: image,
                icon: icon,
                link: link
            }
        );
    };




    return (
        <div className="projectsMainBox">
            <div className="container">
                <h3>Projects</h3>
                <div className="progressBox">
                    <ProgressBar progress={progress} />
                </div>
                <div className="projectBtns">
                    <button onClick={() => handleTabClick("react")}> React Projects </button>
                    <button onClick={() => handleTabClick("web")}> Web Projects </button>
                    <button style={{background: "linear-gradient(45deg, #0098a9 0%, #00d4ff 50%, #006d7a 100%)"}} onClick={() => handleTabClick("android")}> Android Projects </button>
                </div>
                <div className="projectBox">
                    <div className="allProjects">
                        <div className="project project1" onClick={() => handleProjectClick("This is project title1", "this is the project description for project 1. so we should check it", projectImg, faGithub, "https://www.facebook.com/")}>
                            <img src={projectImg} alt="project" />
                        </div>
                        <div className="project project2" onClick={() => handleProjectClick("This is project title2", "this is the project description for project 2. so we should check it", projectImg, faGithub, "https://www.youtube.com/")}>
                            <img src={projectImg} alt="project" />
                        </div>
                        <div className="project project3" onClick={() => handleProjectClick("This is project title3", "this is the project description for project 3. so we should check it", projectImg, faGithub, "https://www.x.com/")}>
                            <img src={projectImg} alt="project" />
                        </div>
                    </div>
                    <div className="viewProjectsBox">
                        <Link to={selectedProject.link}>
                            <div className="viewProject">
                                <div className="imageBox">
                                    <img src={selectedProject.image} alt="project" />
                                </div>
                                <div className="contentBox">
                                    <h3>{selectedProject.title}</h3>
                                    <p>{selectedProject.details}</p>
                                    <span><FontAwesomeIcon icon={selectedProject.icon} /></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AndroidProject;
