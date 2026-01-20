import React from "react";
import ProjectsComponent from "./ProjectsComponent";
// import projectImg from "../images/emon.png";
import qrapp from "../images/otherProjects/qrapp.png";
import qrappLogo from "../images/otherProjects/qrapplogo.png";
import ticTacToe from "../images/otherProjects/tictactoe.png";
import ticTacToeLogo from "../images/otherProjects/tictactoelogo.png";
import messManagement from "../images/otherProjects/messmanagement.png";
import messManagementLogo from "../images/otherProjects/messmanagelogo.png";
import memoryMap from "../images/otherProjects/memomap.png";
import dreamssel from "../images/dreamssel.png";
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Others({ handleTabClick }) {
    // Create projects array with all other projects
    const projects = [
        {
            title: "QR Code Generator",
            details: "A QR Code Generator Desktop App built with Electron for sharing data and files between devices. Designed with HTML and CSS, with Python and Express.js backend.",
            image: qrapp,
            logo: qrappLogo,
            icon: faGithub,
            link: "https://github.com/mdnuruzzamanemon/linuxQRAppOs"
        },
        {
            title: "Tic Tac Toe Game",
            details: "A console-based Tic-Tac-Toe game developed in C programming. It allows two players to play in turn, displaying the game board and results directly in the terminal.",
            image: ticTacToe,
            logo: ticTacToeLogo,
            icon: faGithub,
            link: "https://github.com/mdnuruzzamanemon/ticTacToeWithC"
        },
        {
            title: "Mess Management App",
            details: "A console-based mess management system developed in C using linked lists. Students can update their meal count, costs, and other mess-related information.",
            image: messManagement,
            logo: messManagementLogo,
            icon: faGithub,
            link: "https://github.com/mdnuruzzamanemon/messManagementWithC"
        },
        {
            title: "Memory Map",
            details: "A Page Replacement and Memory Allocation Algorithm Visualizer built using HTML, CSS, and JavaScript. It visually demonstrates how different memory management algorithms work, helping users understand system-level concepts interactively.",
            image: memoryMap,
            logo: memoryMap,
            icon: faGlobe,
            link: "https://memory-map-lilac.vercel.app"
        },
        {
            title: "Dreamssel for your fashion dream",
            details: "Marketplace where users can buy products as well as distributors can also buy products as resellers",
            image: dreamssel,
            logo: dreamssel,
            icon: faGlobe,
            link: "https://www.dreamssel.com/"
        }
    ];

    return (
        <ProjectsComponent
            title="Other Projects"
            projects={projects}
            activeTab="others"
            handleTabClick={handleTabClick}
        />
    );
}

export default Others; 