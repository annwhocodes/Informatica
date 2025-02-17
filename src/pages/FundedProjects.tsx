import React from 'react';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

function FundedProjects() {
  const projects = [
    {
      title: "AI in Healthcare",
      description: "Government funded research project on medical diagnosis",
      image: "https://source.unsplash.com/800x400/?healthcare"
    },
    {
      title: "Smart City Initiative",
      description: "Industry-sponsored urban development project",
      image: "https://source.unsplash.com/800x400/?smart-city"
    },
    {
      title: "Renewable Energy",
      description: "Research on sustainable computing solutions",
      image: "https://source.unsplash.com/800x400/?renewable"
    }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <h1 className="page-title">Funded Projects</h1>
        <Row title="Ongoing Projects" items={projects} />
      </div>
    </div>
  );
}

export default FundedProjects;