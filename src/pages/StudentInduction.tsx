import React from 'react';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

function StudentInduction() {
  const programs = [
    {
      title: "Orientation Program",
      description: "Welcome session for new students",
      image: "https://source.unsplash.com/800x400/?orientation"
    },
    {
      title: "Technical Workshop",
      description: "Introduction to programming fundamentals",
      image: "https://source.unsplash.com/800x400/?programming"
    },
    {
      title: "Campus Tour",
      description: "Exploring department facilities and labs",
      image: "https://source.unsplash.com/800x400/?campus"
    }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <h1 className="page-title">Student Induction Program</h1>
        <Row title="Induction Activities" items={programs} />
      </div>
    </div>
  );
}

export default StudentInduction;