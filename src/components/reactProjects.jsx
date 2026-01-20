import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/projects.css";
import reactImg1 from "../images/reactImg1.svg";
import reactImg2 from "../images/reactImg2.svg";
import reactImg3 from "../images/reactImg3.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function ProgressBar({ progress }) {
    return (
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
    );
}

function ReactProjects({ handleTabClick }) {

    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setProgress(90);
        },100);
    },[]);

    const [selectedProject, setSelectedProject]= useState(
        {
            title: "My portfolio Website",
            details: "This project is developed with react.js and now it is live on internet.",
            image: reactImg1,
            icon: faGlobe,
            link: "https://www.emon.com/"
        }
    );

    const handleProjectClick =(title, details,image, icon, link)=>
    {
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
                    <ProgressBar progress={progress}/>
                </div>
                <div className="projectBtns">
                    <button style={{background: "linear-gradient(45deg, #0098a9 0%, #00d4ff 50%, #006d7a 100%)"}} onClick={() => handleTabClick("react")}> React Projects </button>
                    <button onClick={() => handleTabClick("web")}> Web Projects </button>
                    <button onClick={() => handleTabClick("android")}> Android Projects </button>
                </div>
                <div className="projectBox">
                    <div className="allProjects">
                        <div className="project project1" onClick={()=>handleProjectClick("My portfolio Website", "This project is developed with react.js and now it is live on internet.",reactImg1,faGlobe, "https://www.emon.com/")}>
                            <img src={reactImg1} alt="project" />
                        </div>
                        <div className="project project2" onClick={()=>handleProjectClick("PiRhoTech website with react", "PiRhoTech is a IT based company. So this is a private project. This project will be live soon.",reactImg2,faGithub, "https://www.github.com/")}>
                            <img src={reactImg2} alt="project" />
                        </div>
                        <div className="project project3" onClick={()=>handleProjectClick("Kormi Koi Website with react", "Kormi Koi is a plattform where user can find daily workers. This project will live soon",reactImg3,faGithub, "https://www.kormikoi.com/")}>
                            <img src={reactImg3} alt="project" /> 
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

export default ReactProjects;
