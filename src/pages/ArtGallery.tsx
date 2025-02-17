import React from 'react';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

function ArtGallery() {
  const artworks = [
    {
      title: "Digital Art Exhibition",
      description: "Student artwork showcase",
      image: "https://source.unsplash.com/800x400/?digital-art"
    },
    {
      title: "Tech Installation",
      description: "Interactive technology art display",
      image: "https://source.unsplash.com/800x400/?installation"
    },
    {
      title: "Creative Computing",
      description: "Computational art projects",
      image: "https://source.unsplash.com/800x400/?creative-tech"
    }
  ];

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="page-title">Art Gallery</h1>
        <Row title="Featured Artworks" items={artworks} />
      </div>
    </div>
  );
}

export default ArtGallery;