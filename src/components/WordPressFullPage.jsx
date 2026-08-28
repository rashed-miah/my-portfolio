import React from "react";
import ProjectsFullPage from "./ProjectsFullPage";
import ProjectsComponent from "./ProjectsComponent";
import theraspan from "../images/wordpress/theraspan.png";
import theraspanLogo from "../images/wordpress/theraspanLogo.png";
import dsf from "../images/wordpress/dsf.png";
import dsfLogo from "../images/wordpress/dsfLogo_rounded.png";
import rrMotor from "../images/wordpress/rrMotor.png";
import rrMotorLogo from "../images/wordpress/rrMotorLogo.png";
import kaizen from "../images/wordpress/kaizen.png";
import kaizenLogo from "../images/wordpress/kaizenLogo.png";
import amin from "../images/wordpress/amin.png";
import aminLogo from "../images/wordpress/aminLogo.jpg";
import farheen from "../images/wordpress/farheen.png";
import farheenLogo from "../images/wordpress/farheenLogo.png";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function WordPressFullPage() {
  const projects = [
    {
      title: "Theraspan",
      details:
        "Online Learning & Course Platform — A WordPress-based e-learning website with customized theme design and functionality, built using Elementor Pro, Tutor LMS Pro, WooCommerce, and JetEngine. The platform includes course and instructor management, dynamic course listings, enrollment and purchasing functionality, and responsive layouts for an engaging learning experience.",
      image: theraspan,
      logo: theraspanLogo,
      icon: faGlobe,
      link: "https://theraspan.com/staging/7810",
    },
    {
      title: "Farheen Naz Vlogs",
      details:
        "Food & E-commerce Website — A WordPress-based website featuring a WooCommerce-powered online store for Pakistani spice products, recipe content, product listings, cart and checkout functionality. The project also includes recipe browsing and a responsive, user-friendly design tailored to the brand.",
      image: farheen,
      logo: farheenLogo,
      icon: faGlobe,
      link: "https://farheennazvlogs.com.au/",
    },
    {
      title: "DSF Home",
      details:
        "E-commerce Website — A WordPress-based eCommerce website built with Elementor Pro and WooCommerce, featuring product management, cart and checkout functionality, payment integration, responsive layouts, and custom website functionality. The project also involved performance optimization and troubleshooting.",
      image: dsf,
      logo: dsfLogo,
      icon: faGlobe,
      link: "https://dsfhome.co.uk/",
    },
    {
      title: "RR Motor Company",
      details:
        "Vehicle Booking Website — A WordPress-based vehicle website featuring a custom booking system with date and time-slot availability. The project includes booking logic to prevent duplicate reservations, responsive layouts, vehicle listing sections, and customized functionality based on client requirements.",
      image: rrMotor,
      logo: rrMotorLogo,
      icon: faGlobe,
      link: "https://rr-motorcompany.co.uk/",
    },
    {
      title: "The Kaizen Strength Coach",
      details:
        "Fitness Coaching Landing Page — A WordPress landing page built with Elementor Pro, featuring Calendly integration for appointment scheduling, event tracking for user interactions, and a custom Thank You page redirect after booking. The page was optimized for responsive and user-friendly experiences.",
      image: kaizen,
      logo: kaizenLogo,
      icon: faGlobe,
      link: "https://thekaizenstrengthcoach.com/",
    },
    {
      title: "Amin's Driving Academy",
      details:
        "Driving Academy Landing Page — A professional WordPress landing page designed for a driving academy, featuring service and pricing sections, responsive layouts, WhatsApp integration, and authentic Google Reviews pulled from Google to build trust and credibility.",
      image: amin,
      logo: aminLogo,
      icon: faGlobe,
      link: "https://amindrivingacademy.com/",
    },
  ];

  return (
    <ProjectsFullPage
      title="WordPress"
      projects={projects}
      category="wordpress"
    />
  );
}

export default WordPressFullPage;
