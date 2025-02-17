import React from 'react';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

function PlacementStatistics() {
  const statistics = [
    {
      title: "Placement Rate",
      description: "95% placement rate for 2024 batch",
      image: "https://source.unsplash.com/800x400/?statistics"
    },
    {
      title: "Top Recruiters",
      description: "Leading tech companies hiring our graduates",
      image: "https://source.unsplash.com/800x400/?corporate"
    },
    {
      title: "Salary Trends",
      description: "Average package trends over the years",
      image: "https://source.unsplash.com/800x400/?growth"
    }
  ];

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="page-title">Placement Statistics</h1>
        <Row title="Placement Highlights" items={statistics} />
      </div>
    </div>
  );
}

export default PlacementStatistics;