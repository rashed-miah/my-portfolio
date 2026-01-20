import React, { useState } from 'react';
import Experience from './Experience';
import Educations from './Educations';
import '../css/projects.css'; // Import progress bar styles

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

const TimelineTabs = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="projectsMainBox">
      <div className="container">
        <div className="timelineHeading">
          <h3>{activeTab==='experience'? "Experience": "Education"}</h3>
        </div>
        
        <div className="progressBox">
          <ProgressBar progress={70} />
        </div>
        <div className="projectBtns">
          <button
            style={activeTab === 'experience' ? { background: 'linear-gradient(45deg, #0098a9 0%, #00d4ff 50%, #006d7a 100%)', color: '#fff' } : {}}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button
            style={activeTab === 'educations' ? { background: 'linear-gradient(45deg, #0098a9 0%, #00d4ff 50%, #006d7a 100%)', color: '#fff' } : {}}
            onClick={() => setActiveTab('educations')}
          >
            Educations
          </button>
        </div>
        <div style={{ marginTop: '30px' }}>
          {activeTab === 'experience' && <Experience />}
          {activeTab === 'educations' && <Educations />}
        </div>
      </div>
    </div>
  );
};

export default TimelineTabs; 