import React from "react";
import ProjectsComponent from "./ProjectsComponent";
import projectImg from "../images/emon.png"; // Fallback image
import parcelLogo from "../images/webProjects/parcelpointlogo.png";
import parcel from "../images/webProjects/parcel-point.jpg";
import drlipu from "../images/webProjects/drlipu.png";
import drlipoLogo from "../images/webProjects/download.svg";
import kormiKoi from "../images/webProjects/kormikoi.png";
import kormiKoiLogo from "../images/webProjects/kormikoiLogo.png";
import nexora from "../images/webProjects/nexora.png";
import nexora_logo from "../images/webProjects/nexora_logo_3.png";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function WebApps({ handleTabClick }) {
  // Create projects array with all web app projects
  const projects = [
    {
      title: "Parcel-Point",
      details:
        "Online Delivery & Management System — A full-stack web application built with React.js, Express.js, and MongoDB, featuring smooth animations powered by Framer Motion and secure authentication using Firebase. The system includes an integrated payment gateway and a comprehensive dashboard for efficient rider, user, and delivery management.",
      image: parcel,
      logo: parcelLogo,
      icon: faGlobe,
      link: "https://parcel-point-bc3e2.web.app/",
    },
    {
      title: "Portfolio Website",
      details:
        "A portfolio website for Dr. Molla Shahadat Hossain Lipu, showcasing his academic achievements, research, publications, and projects. Built using HTML, CSS, Bootstrap, JavaScript and Animate On Scroll (AOS).",
      image: drlipu,
      logo: drlipoLogo,
      icon: faGlobe,
      link: "https://drlipu.vercel.app/",
    },
    {
      title: "Apartment Management & Rental Platform.",
      details:
        "NEXORA-Server is the secure and scalable backend API powering the Nexora web application. Built with Node.js, Express, and MongoDB, it handles authentication, user roles, data management, and seamless communication between the client and database. Designed for performance, security, and flexibility in a modern full-stack environment.",
      image: nexora,
      logo: nexora_logo,
      icon: faGlobe,
      link: "https://nexora-e19dc.web.app/",
    },
    // {
    //   title: "Kormi Koi",
    //   details:
    //     "Worker management app for electricians, plumbers, painters, and other laborers to find jobs. Built with Next.js, Express.js, PostgreSQL, Knex.js, Socket programming, SSL Commerz, with a Flutter mobile app.",
    //   image: kormiKoi,
    //   logo: kormiKoiLogo,
    //   icon: faGlobe,
    //   link: "https://kormikoi-landing.vercel.app",
    // },
    // {
    //   title: "Outcome Based Education Management System",
    //   details:
    //     "A system that helps institutes deliver outcome-focused education and map course outcomes to program outcomes. Built with Next.js, TypeScript, Express.js, ShadCN, PostgreSQL, and Knex.js.",
    //   image: projectImg,
    //   logo: projectImg,
    //   icon: faGlobe,
    //   link: "#",
    // },
    // {
    //   title: "Blog Web for Modern Technologies",
    //   details:
    //     "A blog web app for modern technologies, featuring tech stack-related blogs with syntax-highlighted code. Built with Next.js.",
    //   image: projectImg,
    //   logo: projectImg,
    //   icon: faGlobe,
    //   link: "https://pirhotech-blog.vercel.app",
    // },
    // {
    //   title: "Chat App",
    //   details:
    //     "A real-time chat application built using socket programming for instant messaging. Developed with Express.js, EJS for templating, and MongoDB for data storage.",
    //   image: projectImg,
    //   logo: projectImg,
    //   icon: faGlobe,
    //   link: "https://chatapp-iota-ebon.vercel.app",
    // },
  ];

  return (
    <ProjectsComponent
      title="Web Apps"
      projects={projects}
      activeTab="webapps"
      handleTabClick={handleTabClick}
    />
  );
}

export default WebApps;
