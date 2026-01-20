import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/projects.css";
// import projectImg from "../images/emon.png";
import valluk from "../images/valluk.png"
import bdinclusive from "../images/bdinclusive.png"
import dreamssel from "../images/dreamssel.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


function ProgressBar({ progress }) {
    return (
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
    );
}

function WebProject({ handleTabClick }) {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setProgress(95);
        }, 100);
    }, []);

    const [selectedProject, setSelectedProject] = useState(
        {
            title: "E-Commerce website of Valluk",
            details: "Valluk is a platform where user can buy there daily needs.",
            image: valluk,
            icon: faGlobe,
            link: "https://www.valluk.com/"
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
        <div className="projectsMainBox" >
            <div className="container">
                <h3>Projects</h3>
                <div className="progressBox">
                    <ProgressBar progress={progress} />
                </div>
                <div className="projectBtns">
                    <button onClick={() => handleTabClick("react")}> React Projects </button>
                    <button style={{background: "linear-gradient(45deg, #0098a9 0%, #00b4c7 50%, #007a8a 100%)"}} onClick={() => handleTabClick("web")}> Web Projects </button>
                    <button onClick={() => handleTabClick("android")}> Android Projects </button>
                </div>
                <div className="projectBox">
                    <div className="allProjects">
                        <div className="project project1" onClick={() => handleProjectClick("E-Commerce website of Valluk", "Valluk is a platform where user can buy there daily needs.", valluk, faGlobe, "https://www.valluk.com/")}>
                            <img src={valluk} alt="project" />
                        </div>
                        <div className="project project2" onClick={() => handleProjectClick("E-commerce website BdInclusive", "You can buy your products from this site", bdinclusive, faGlobe, "https://www.bdinclusive.com/")}>
                            <img src={bdinclusive} alt="project" />
                        </div>
                        <div className="project project3" onClick={() => handleProjectClick("Dreamssel for your fasion dream", "Marketplace where user can buy product as well as distributor can aslo buy product as reseller", dreamssel, faGlobe, "https://www.dreamssel.com/")}>
                            <img src={dreamssel} alt="project" />
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

export default WebProject;
