import React from "react";
import "../css/timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faNewspaper } from "@fortawesome/free-solid-svg-icons";

const experienceData = [
  {
    title: "PirhoTech",
    validity: "Frontend Developer ||  Remote || 2025–Present",
    description:
      "Assisted in the development of a web-based platform using   Html, CSS, JavaScript and React.js, enhancing interactivity and data management capabilities.",
    icon: faLaptopCode,
    position: "left",
  },
  {
    title: "Freelancing Agency IT",
    validity:
      "Digital Marketing Specialist & Shopify Theme Customizer || Freelance / Remote || 2021–2023",
    description:
      "I verified and managed Facebook Business Manager accounts for multiple international clients while creating, optimizing, and managing Facebook and Instagram ad campaigns targeting specific locations and audiences. I planned and executed paid marketing strategies to increase sales, leads, and brand visibility, specializing in running ad campaigns for clients in the USA, Morocco, India, Netherlands, France, UK, and Switzerland. I conducted audience research, campaign budgeting, and performance tracking using Facebook Ads Manager, and optimized ads to achieve better CTR, conversions, and ROI. Additionally, I provided complete Shopify services including theme customization, store setup and design, product uploading and optimization, and landing page design for ad campaigns. Through these services, I helped small and medium businesses grow their online presence and increase revenue using effective digital marketing strategies.",
    icon: faNewspaper,
    position: "right",
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
