import React from 'react';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

function WorkshopsAndTrips() {
  const workshops = [
    {
      title: "AI Workshop",
      description: "Hands-on machine learning workshop",
      image: "https://source.unsplash.com/800x400/?workshop"
    },
    {
      title: "Cybersecurity Training",
      description: "Advanced security practices workshop",
      image: "https://source.unsplash.com/800x400/?cybersecurity"
    },
    {
      title: "Field Trip",
      description: "Educational visit to tech innovation center",
      image: "https://source.unsplash.com/800x400/?field-trip"
    }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <h1 className="page-title">Workshops & Field Trips</h1>
        <Row title="Recent Events" items={workshops} />
      </div>
    </div>
  );
}

export default WorkshopsAndTrips;