import React from 'react';
import Navbar from '../components/Navbar';

function VisionMission() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <h1 className="page-title">Vision & Mission</h1>
        <div className="content-section">
          <div className="vision-section">
            <h2>Vision</h2>
            <p>To be a center of excellence in Computer Science education, fostering innovation, research, and technological advancement.</p>
          </div>
          <div className="mission-section">
            <h2>Mission</h2>
            <ul>
              <li>Provide quality education in computer science and related technologies</li>
              <li>Foster research and innovation in emerging technologies</li>
              <li>Develop industry-ready professionals with strong technical and ethical foundations</li>
              <li>Promote collaboration with industry and research institutions</li>
              <li>Contribute to the advancement of computer science through research and development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionMission;