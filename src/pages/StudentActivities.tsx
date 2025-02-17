import React from 'react';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

function StudentActivities() {
  const activities = [
    {
      title: "Hackathon",
      description: "24-hour coding competition",
      image: "https://source.unsplash.com/800x400/?hackathon"
    },
    {
      title: "Tech Club",
      description: "Weekly technology meetups and projects",
      image: "https://source.unsplash.com/800x400/?tech-club"
    },
    {
      title: "Cultural Events",
      description: "Department cultural celebrations",
      image: "https://source.unsplash.com/800x400/?cultural-event"
    }
  ];

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="page-title">Student Activities</h1>
        <Row title="Recent Activities" items={activities} />
      </div>
    </div>
  );
}

export default StudentActivities;