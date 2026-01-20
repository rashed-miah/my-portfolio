import React from "react";
import ProjectsComponent from "./ProjectsComponent";
import projectImg from "../images/emon.png";
import brainadorn from "../images/androidProjects/brainadorn.jpg";
import brainadornLogo from "../images/androidProjects/brainAdronLogo.png";
import kormiKoi from "../images/androidProjects/kormikoiApp.jpg";
import kormiKoiLogo from "../images/webProjects/kormikoiLogo.png";
import coverPageGenerator from "../images/androidProjects/coverpageApp.jpg";
import coverPageGeneratorLogo from "../images/androidProjects/coverpagelogo.png";
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

function AndroidApps({ handleTabClick }) {
    // Create projects array with all Android app projects
    const projects = [
        {
            title: "Brain Adorn Game",
            details: "Brain Adorn is a puzzle and quiz-based game that also includes a memory recall challenge inspired by the classic Simon game. Developed using native Java.",
            image: brainadorn,
            logo: brainadornLogo,
            icon: faGooglePlay,
            link: "#"
        },
        {
            title: "Kormi Koi Mobile App",
            details: "Worker management app built with Flutter. Allows electricians, plumbers, painters, and other laborers to find jobs.",
            image: kormiKoi,
            logo: kormiKoiLogo,
            icon: faGooglePlay,
            link: "https://kormikoi-landing.vercel.app"
        },
        {
            title: "Cover Page Generator App",
            details: "A Cover Page Generator App designed for creating university assignment and lab report cover pages. It offers pre-designed templates styled with HTML and CSS, while using native Java.",
            image: coverPageGenerator,
            logo: coverPageGeneratorLogo,
            icon: faGooglePlay,
            link: "https://pirhotech.com/works/cover-page-generator"
        }
    ];

    return (
        <ProjectsComponent
            title="Android Apps"
            projects={projects}
            activeTab="android"
            handleTabClick={handleTabClick}
        />
    );
}

export default AndroidApps; 