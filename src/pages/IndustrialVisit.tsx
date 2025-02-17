import React from 'react';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

function IndustrialVisit() {
  const visits = [
    {
      title: "Karnataka State Remote Sensing Application Centre",
      description: "Industrial visits provide the students with an opportunity to learn practically through interaction, working methods and employment practices. It gives the students an exposure to current work practices as opposed to theoretical knowledge being taught at their college classrooms. Information Science and Engineering Department organized Industrial visit to Karnataka State Remote Sensing Applications Centre (KSRSAC), Bengaluru for fifth semester students along with faculty members on 6th and 7th November 2024. The students gained knowledge about wide array of projects under KSRSAC in the areas of remote sensing, forest, mines and geology, rural development, water resources, minor irrigation, ecology and environment, agriculture, horticulture, BBMP, pollution control, lake development etc. which made them to acquire ideas for doing projects.",
      image: "https://i.imgur.com/NGi9z0C.png"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Industrial Visits</h1>
        <Row title="6th & 7th November, 2024" items={visits} />
      </div>
    </div>
  );
}

export default IndustrialVisit;