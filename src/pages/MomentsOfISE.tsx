import React from 'react';

function MomentsOfISE() {
  const images = [
    // Landscape images
    {
      url: "https://i.imgur.com/cJ7uMcc.jpeg",
      caption: "Workshop on AI, Web, UI/UX, Cybersecurity and Cloud",
      isLandscape: true
    },
    {
      url: "https://pbs.twimg.com/media/GSDHJoNacAAs_33?format=jpg&name=900x900",
      caption: "amBITion Hackathon Winners",
      isLandscape: true
    },
    // Portrait images
    {
      url: "https://i.imgur.com/NGi9z0C.png",
      caption: "Student Achievement Ceremony",
      isLandscape: false
    },
    {
      url: "https://i.imgur.com/NGi9z0C.png",
      caption: "Technical Workshop Session",
      isLandscape: false
    },
    {
      url: "https://i.imgur.com/NGi9z0C.png",
      caption: "Cultural Event Performance",
      isLandscape: false
    },
    {
      url: "https://i.imgur.com/NGi9z0C.png",
      caption: "Industry Expert Talk",
      isLandscape: false
    },
    {
      url: "https://i.imgur.com/NGi9z0C.png",
      caption: "Project Exhibition",
      isLandscape: false
    },
    {
      url: "https://i.imgur.com/NGi9z0C.png",
      caption: "Sports Day Celebration",
      isLandscape: false
    },
    {
      url: "https://i.imgur.com/NGi9z0C.png",
      caption: "Alumni Meet",
      isLandscape: false
    },
    {
      url: "https://i.imgur.com/NGi9z0C.png",
      caption: "Graduation Day",
      isLandscape: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Moments of ISE</h1>
        
        {/* Landscape Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {images.filter(img => img.isLandscape).map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center text-lg font-semibold px-4">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Portrait Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.filter(img => !img.isLandscape).map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center text-sm font-semibold px-4">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MomentsOfISE;