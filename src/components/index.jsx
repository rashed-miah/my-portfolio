import React, { useState } from "react";
import "../css/index.css";
import Navbar from "./navbar";
import Header from "./header";
import About from "./about";
import WebApps from "./WebApps";
import AndroidApps from "./AndroidApps";
import Others from "./Others";
import Skills from "./skills";
import Certifications from "./certifications";
import TimelineTabs from "./TimelineTabs";
import ContactForm from "./ContactForm";
import SolarSystemBG from "./3js/animation";
import SocialNav from "./SocialNav";

function Index() {
  const [activeTab, setActiveTab] = useState("webapps"); // Default to Web Apps tab

  // Function to handle tab clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="outerBox">
      <div className="innerBox">
        {/* <SolarSystemBG /> */}
        <Navbar />
        <Header />
        <About />
        {activeTab === "webapps" && <WebApps handleTabClick={handleTabClick} />}
        {/* {activeTab === "android" && (
          <AndroidApps handleTabClick={handleTabClick} />
        )}
        {activeTab === "others" && <Others handleTabClick={handleTabClick} />} */}
        <Skills />
        {/* <Certifications /> */}
        <TimelineTabs />
        <ContactForm />
        <SocialNav />
      </div>
    </div>
  );
}

export default Index;
