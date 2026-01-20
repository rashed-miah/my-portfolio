import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/projects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./navbar";

function ProgressBar({ progress }) {
    return (
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
    );
}

function ProjectsFullPage({ title, projects, category }) {
    const [progress, setProgress] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    useEffect(() => {
        setTimeout(() => {
            setProgress(title === "Web Apps" ? 90 : title === "Android Apps" ? 70 : 80);
        }, 100);
    }, [title]);

    // Calculate pagination
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="outerBox">
            <div className="innerBox">
                <Navbar />
        <>
        <div className="projectsMainBox">
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <Link to="/" style={{ marginRight: '15px', color: '#00d4ff'  }}>
                        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                    </Link>
                    <h3>{title} - All Projects</h3>
                </div>
                
                <div className="progressBox">
                    <ProgressBar progress={progress} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', margin: '30px 0',flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {currentProjects.map((project, index) => (
                        <div className="viewProjectsBox" key={index}>
                            <Link to={project.link}>
                                <div className="viewProject">
                                    <div className="imageBox project-logo-bg"
                                        style={{
                                            backgroundImage: `url(${project.image || project.logo})`,
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'top center',
                                            transition: 'background-position 3s ease',
                                            height: '200px',
                                        }}
                                    >
                                        {/* <img src={project.image} alt={project.title} /> */}
                                    </div>
                                    <div className="contentBox">
                                        <h3>{project.title}</h3>
                                        <p>{project.details}</p>
                                        <span><FontAwesomeIcon icon={project.icon} /></span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                
                {/* Pagination */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px' }}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            style={{
                                padding: '8px 12px',
                                background: currentPage === number ? 'linear-gradient(45deg, #0098a9 0%, #00d4ff 50%, #006d7a 100%)' : '#f0f0f0',
                                color: currentPage === number ? 'white' : '#333',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </div>
        </>
        </div>
        </div>
    );
}

export default ProjectsFullPage; 