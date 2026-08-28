import React from "react";
import ProjectsFullPage from "./ProjectsFullPage";
import projectImg from "../images/emon.png"; // Fallback image
import biddarthiLogo from "../images/webProjects/BiddarthiLogo.png";
import biddarthi from "../images/webProjects/biddarthi.png";
import parcelLogo from "../images/webProjects/parcelpointlogo.png";
import parcel from "../images/webProjects/parcel-point.jpg";
import pirhoTechLogo from "../images/webProjects/pirhoTechLogo.svg";
import pirhoTech from "../images/webProjects/pirhotech.png";
import kormiKoi from "../images/webProjects/kormikoi.png";
import kormiKoiLogo from "../images/webProjects/kormikoiLogo.png";
import nexora from "../images/webProjects/nexora.png";
import nexora_logo from "../images/webProjects/nexora_logo_3.png";
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
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function WebAppsFullPage() {
  // Create projects array with all web app projects
  const projects = [
    {
      title: "Biddarthi",
      details:
        "Online e-learning and course selling platform. Built with Next.js, Express.js, TypeScript, MongoDB, Framer Motion and ShadCN for admin panel. V2 adds user authentication, payment gateway integration, PostgreSQL, Knex.js, and SSL Commerz.",
      image: biddarthi,
      logo: biddarthiLogo,
      icon: faGlobe,
      link: "https://biddarthi.org",
    },

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
      title: "Apartment Management & Rental Platform.",
      details:
        "NEXORA-Server is the secure and scalable backend API powering the Nexora web application. Built with Node.js, Express, and MongoDB, it handles authentication, user roles, data management, and seamless communication between the client and database. Designed for performance, security, and flexibility in a modern full-stack environment.",
      image: nexora,
      logo: nexora_logo,
      icon: faGlobe,
      link: "https://nexora-e19dc.web.app/",
    },

    {
      title: "Turf Booking System",
      details:
        "A booking system for sports turfs, product purchases, and tournament listings. Built with Next.js, Supabase, SSL Commerz.",
      image: turfSlot,
      logo: turfSlotLogo,
      icon: faGlobe,
      link: "https://turfslot.com",
    },

    {
      title: "PirhoTech Old Website",
      details:
        "Agency web app where all services are shown. Built with React.js and Particle.js.",
      image: pirthotechold,
      logo: pirthotechold,
      icon: faGlobe,
      link: "https://pirhotech-old-website.pirhotech.com",
    },
    {
      title: "E-Commerce Website",
      details:
        "An e-commerce platform where users can get fashion products. Built with HTML, CSS, Bootstrap, Laravel.",
      image: bdinclusive,
      logo: bdinclusive,
      icon: faGlobe,
      link: "https://bdinclusive.com",
    },
    {
      title: "Blog Web for Modern Technologies",
      details:
        "A blog web app for modern technologies, featuring tech stack-related blogs with syntax-highlighted code. Built with Next.js.",
      image: pirhoTechBlog,
      logo: pirhoTechBlogLogo,
      icon: faGlobe,
      link: "https://pirhotech-blog.vercel.app",
    },
    {
      title: "Figma to HTML",
      details:
        "An e-commerce platform where users can get fashion products. This is mainly a clone of a Figma website design. Built with HTML, CSS, Bootstrap.",
      image: fimgatohtmlecommerce,
      logo: fimgatohtmlecommerce,
      icon: faGlobe,
      link: "https://ecommerce-figma-to-html.vercel.app",
    },
    {
      title: "Chat App",
      details:
        "A real-time chat application built using socket programming for instant messaging. Developed with Express.js, EJS for templating, and MongoDB for data storage.",
      image: chatApp,
      icon: faGlobe,
      link: "https://chatapp-iota-ebon.vercel.app",
    },
    {
      title: "Portfolio Website",
      details:
        "A portfolio website for Dr. Molla Shahadat Hossain Lipu, showcasing his academic achievements, research, publications, and projects. Built using HTML, CSS, Bootstrap, JavaScript, Animate On Scroll (AOS), and WOW.js.",
      image: drlipu,
      logo: drlipu,
      icon: faGlobe,
      link: "https://drlipu.vercel.app/",
    },
  ];

  return (
    <ProjectsFullPage title="Web Apps" projects={projects} category="webapps" />
  );
}

export default WebAppsFullPage;
