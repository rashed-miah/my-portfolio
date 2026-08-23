import React from "react";
import "../css/timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";

const experienceData = [
  {
    title: "SM Technology",
    validity: "Junior Web Developer(CMS) || Onsite || April 2026 – Present",
    description:
      "Worked on real-world WordPress projects for global clients using WordPress, Elementor, WooCommerce, plugins, and custom themes. Collaborated directly with international clients to understand requirements and deliver tailored solutions. Experienced in theme and plugin customization, plugin integration, eCommerce setup, landing pages, website migration, troubleshooting, and performance optimization, ensuring quality, usability, and client satisfaction.",
    icon: faWordpress,
    position: "left",
  },

  {
    title: "PaymentSave ",
    validity: "MERN Stack Developer ||  Remote || August 2025 – March 2026",
    description:
      "Assisted in the development of a web-based platform using HTML, CSS, JavaScript, and React.js, enhancing interactivity and data management, and occasionally contributed to backend tasks based on project requirements.",
    icon: faLaptopCode,
    position: "right",
  },

  {
    title: "Freelancing Agency IT",
    validity:
      "Digital Marketing Specialist & Shopify Theme Customizer || Freelance / Remote || 2021–2023",
    description:
      "Worked with global clients to manage Facebook Business Manager and run targeted Facebook & Instagram ad campaigns. Handled audience research, campaign optimization, budgeting, and performance tracking to improve leads, sales, and ROI. Also provided Shopify theme customization, store setup, product management, and landing page development based on client requirements.",
    icon: faNewspaper,
    position: "left",
  },
];

const Experience = () => {
  return (
    <div className="timelineContainer">
      <div className="vertical-line"></div>
      {experienceData.map((item, index) => (
        <div key={index} className={`box box-${item.position}`}>
          <span className={`icon-wrapper ${item.position}`}>
            <FontAwesomeIcon icon={item.icon} size="2x" className="icon" />
          </span>
          <div className="info">
            <h2>{item.title}</h2>
            <p>{item.validity}</p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
