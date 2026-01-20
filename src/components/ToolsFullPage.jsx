import React from "react";
import ProjectsFullPage from "./ProjectsFullPage";
import projectImg from "../images/emon.png";
import dreamssel from "../images/dreamssel.png";
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ToolsFullPage() {
    // Create projects array with all tools and games projects
    const projects = [
        {
            title: "Memory Map",
            details: "A Page Replacement and Memory Allocation Algorithm Visualizer built using HTML, CSS, and JavaScript. It visually demonstrates how different memory management algorithms work, helping users understand system-level concepts interactively.",
            image: projectImg,
            icon: faGlobe,
            link: "https://memory-map-lilac.vercel.app"
        },
        {
            title: "QR Code Generator",
            details: "A QR Code Generator Desktop App built with Electron for sharing data and files between devices. Designed with HTML and CSS, with Python and Express.js backend.",
            image: projectImg,
            icon: faGithub,
            link: "https://emon.pirhotech.com/projects"
        },
        {
            title: "Cover Page Generator App",
            details: "A Cover Page Generator App designed for creating university assignment and lab report cover pages. It offers pre-designed templates styled with HTML and CSS, while using native Java.",
            image: projectImg,
            icon: faGlobe,
            link: "https://pirhotech.com/works/cover-page-generator"
        },
        {
            title: "Brain Adorn Game",
            details: "Brain Adorn is a puzzle and quiz-based game that also includes a memory recall challenge inspired by the classic Simon game. Developed using native Java.",
            image: projectImg,
            icon: faCode,
            link: "#"
        },
        {
            title: "Tic Tac Toe Game",
            details: "A console-based Tic-Tac-Toe game developed in C programming. It allows two players to play in turn, displaying the game board and results directly in the terminal.",
            image: projectImg,
            icon: faGithub,
            link: "https://emon.pirhotech.com/projects"
        },
        {
            title: "Mess Management App",
            details: "A console-based mess management system developed in C using linked lists. Students can update their meal count, costs, and other mess-related information.",
            image: projectImg,
            icon: faGithub,
            link: "https://emon.pirhotech.com/projects"
        },
        {
            title: "Dreamssel for your fashion dream",
            details: "Marketplace where users can buy products as well as distributors can also buy products as resellers",
            image: dreamssel,
            icon: faGlobe,
            link: "https://www.dreamssel.com/"
        }
    ];

    return (
        <ProjectsFullPage
            title="Tools & Games"
            projects={projects}
            category="tools"
        />
    );
}

export default ToolsFullPage; 