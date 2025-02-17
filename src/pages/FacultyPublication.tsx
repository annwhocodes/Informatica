import React from 'react';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

function FacultyPublication() {
  const publications = [
    {
      title: "Machine Learning in Healthcare",
      description: "Published in IEEE Transactions on Medical Imaging",
      image: "https://source.unsplash.com/800x400/?medical"
    },
    {
      title: "Blockchain Security",
      description: "Journal of Cryptography and Network Security",
      image: "https://source.unsplash.com/800x400/?security"
    },
    {
      title: "AI Ethics",
      description: "International Journal of Computer Science",
      image: "https://source.unsplash.com/800x400/?ethics"
    }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <h1 className="page-title">Faculty Publications</h1>
        <Row title="Recent Publications" items={publications} />
      </div>
    </div>
  );
}

export default FacultyPublication;