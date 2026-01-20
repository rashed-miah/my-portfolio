import React from "react";
import ProjectsFullPage from "./ProjectsFullPage";
import projectImg from "../images/emon.png"; // Fallback image
import biddarthiLogo from "../images/webProjects/BiddarthiLogo.png";
import biddarthi from "../images/webProjects/biddarthi.png";
import pirhoTechLogo from "../images/webProjects/pirhoTechLogo.svg";
import pirhoTech from "../images/webProjects/pirhotech.png";
import kormiKoi from "../images/webProjects/kormikoi.png";  
import kormiKoiLogo from "../images/webProjects/kormikoiLogo.png";
import turfSlot from "../images/webProjects/turfslot.png";
import turfSlotLogo from "../images/webProjects/turfslotLogo.png";
import pirhoTechBlog from "../images/webProjects/pirhoblog.png";
import pirhoTechBlogLogo from "../images/webProjects/blackLineLogo.svg";
import obe from "../images/webProjects/obe.png";
import chatApp from "../images/webProjects/chatapp.png";
import bdinclusive from "../images/webProjects/bdinclusive.png";
import pirthotechold from "../images/webProjects/pirhotechOld.png";
import drlipu from "../images/webProjects/drlipu.png";
import fimgatohtmlecommerce from "../images/webProjects/figmatohtmlEcom.png";
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function WebAppsFullPage() {
    // Create projects array with all web app projects
    const projects = [
        {
            title: "Biddarthi",
            details: "Online e-learning and course selling platform. Built with Next.js, Express.js, TypeScript, MongoDB, Framer Motion and ShadCN for admin panel. V2 adds user authentication, payment gateway integration, PostgreSQL, Knex.js, and SSL Commerz.",
            image: biddarthi,
            logo: biddarthiLogo,
            icon: faGlobe,
            link: "https://biddarthi.org"
        },
        {
            title: "PirhoTech",
            details: "Agency web app where all services are shown. Built with Next.js and Three.js.",
            image: pirhoTech,
            logo: pirhoTechLogo,
            icon: faGlobe,
            link: "https://pirhotech.com"
        },
        {
            title: "Turf Booking System",
            details: "A booking system for sports turfs, product purchases, and tournament listings. Built with Next.js, Supabase, SSL Commerz.",
            image: turfSlot,
            logo: turfSlotLogo,
            icon: faGlobe,
            link: "https://turfslot.com"
        },
        {
            title: "Kormi Koi",
            details: "Worker management app for electricians, plumbers, painters, and other laborers to find jobs. Built with Next.js, Express.js, PostgreSQL, Knex.js, Socket programming, SSL Commerz, with a Flutter mobile app.",
            image: kormiKoi,
            logo: kormiKoiLogo,
            icon: faGlobe,
            link: "https://kormikoi-landing.vercel.app"
        },
        {
            title: "Outcome Based Education Management System",
            details: "A system that helps institutes deliver outcome-focused education and map course outcomes to program outcomes. Built with Next.js, TypeScript, Express.js, ShadCN, PostgreSQL, and Knex.js.",
            image: obe,
            icon: faGlobe,
            link: "#"
        },
        {
            title: "PirhoTech Old Website",
            details: "Agency web app where all services are shown. Built with React.js and Particle.js.",
            image: pirthotechold,
            logo: pirthotechold,
            icon: faGlobe,
            link: "https://pirhotech-old-website.pirhotech.com"
        },
        {
            title: "E-Commerce Website",
            details: "An e-commerce platform where users can get fashion products. Built with HTML, CSS, Bootstrap, Laravel.",
            image: bdinclusive,
            logo: bdinclusive,
            icon: faGlobe,
            link: "https://bdinclusive.com"
        },
        {
            title: "Blog Web for Modern Technologies",
            details: "A blog web app for modern technologies, featuring tech stack-related blogs with syntax-highlighted code. Built with Next.js.",
            image: pirhoTechBlog,
            logo: pirhoTechBlogLogo,
            icon: faGlobe,
            link: "https://pirhotech-blog.vercel.app"
        },
        {
            title: "Figma to HTML",
            details: "An e-commerce platform where users can get fashion products. This is mainly a clone of a Figma website design. Built with HTML, CSS, Bootstrap.",
            image: fimgatohtmlecommerce,
            logo: fimgatohtmlecommerce,
            icon: faGlobe,
            link: "https://ecommerce-figma-to-html.vercel.app"
        },
        {
            title: "Chat App",
            details: "A real-time chat application built using socket programming for instant messaging. Developed with Express.js, EJS for templating, and MongoDB for data storage.",
            image: chatApp,
            icon: faGlobe,
            link: "https://chatapp-iota-ebon.vercel.app"
        },
        {
            title: "Portfolio Website",
            details: "A portfolio website for Dr. Molla Shahadat Hossain Lipu, showcasing his academic achievements, research, publications, and projects. Built using HTML, CSS, Bootstrap, JavaScript, Animate On Scroll (AOS), and WOW.js.",
            image: drlipu,
            logo: drlipu,
            icon: faGlobe,
            link: "https://drlipu.vercel.app/"
        },
    ];

    return (
        <ProjectsFullPage
            title="Web Apps"
            projects={projects}
            category="webapps"
        />
    );
}

export default WebAppsFullPage; 