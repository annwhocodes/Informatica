import React from 'react';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

function IndustrialVisit() {
  const visits = [
    {
      title: "Tech Giant Campus",
      description: "Visit to leading technology company headquarters",
      image: "https://source.unsplash.com/800x400/?tech-company"
    },
    {
      title: "Data Center Tour",
      description: "Exploring modern data center infrastructure",
      image: "https://source.unsplash.com/800x400/?data-center"
    },
    {
      title: "Research Lab Visit",
      description: "Advanced research facility exploration",
      image: "https://source.unsplash.com/800x400/?research-lab"
    }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <h1 className="page-title">Industrial Visits</h1>
        <Row title="Recent Visits" items={visits} />
      </div>
    </div>
  );
}

export default IndustrialVisit;