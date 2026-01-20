import React from "react";
import ProjectsComponent from "./ProjectsComponent";
import projectImg from "../images/emon.png";
import valluk from "../images/valluk.png";
import bdinclusive from "../images/bdinclusive.png";
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Ecommerce({ handleTabClick }) {
    // Create projects array with all e-commerce and agency projects
    const projects = [
        {
            title: "Agency Website",
            details: "Agency web app where all services are shown. Built with React.js and Particle.js.",
            image: projectImg,
            icon: faGlobe,
            link: "https://pirhotech-old-website.pirhotech.com"
        },
        {
            title: "E-Commerce Website",
            details: "An e-commerce platform where users can get fashion products. Built with HTML, CSS, Bootstrap, Laravel.",
            image: bdinclusive,
            icon: faGlobe,
            link: "https://bdinclusive.com"
        },
        {
            title: "E-Commerce website of Valluk",
            details: "Valluk is a platform where users can buy their daily needs.",
            image: valluk,
            icon: faGlobe,
            link: "https://www.valluk.com/"
        },
        {
            title: "Portfolio Website",
            details: "A portfolio website for Dr. Molla Shahadat Hossain Lipu, showcasing his academic achievements, research, publications, and projects. Built using HTML, CSS, Bootstrap, JavaScript, Animate On Scroll (AOS), and WOW.js.",
            image: projectImg,
            icon: faGlobe,
            link: "https://drlipu.info"
        },
        {
            title: "Figma to HTML",
            details: "An e-commerce platform where users can get fashion products. This is mainly a clone of a Figma website design. Built with HTML, CSS, Bootstrap.",
            image: projectImg,
            icon: faGlobe,
            link: "https://ecommerce-figma-to-html.vercel.app"
        }
    ];

    return (
        <ProjectsComponent
            title="E-commerce & Agency"
            projects={projects}
            activeTab="ecommerce"
            handleTabClick={handleTabClick}
        />
    );
}

export default Ecommerce; 