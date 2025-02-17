import React from 'react';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

function FacultyAchievement() {
  const achievements = [
    {
      title: "Research Excellence Award",
      description: "Dr. Smith received the Research Excellence Award for contributions in AI",
      image: "https://source.unsplash.com/800x400/?award"
    },
    {
      title: "Patent Granted",
      description: "New patent granted for innovative blockchain technology",
      image: "https://source.unsplash.com/800x400/?patent"
    },
    {
      title: "Best Paper Award",
      description: "International Conference on Computer Science 2024",
      image: "https://source.unsplash.com/800x400/?paper"
    }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <h1 className="page-title">Faculty Achievements</h1>
        <Row title="Recent Achievements" items={achievements} />
      </div>
    </div>
  );
}

export default FacultyAchievement;