import React from 'react';

function StudentInduction() {
  const scheduleData = [
    {
      day: "DAY 1 (18-09-2024)",
      activities: [
        "INAUGURATION AND INTRODUCTION TO THE DEPARTMENT",
        "PRE-PLACEMENT TALK-TALK ON INDUSTRY INSIGHTS & AWARENESS",
        "TALK ON ORAL HEALTH & HYGIENE",
        "VISIT TO OTHER DEPARTMENTS"
      ]
    },
    {
      day: "DAY 2 (19-09-2024)",
      activities: [
        "SPORTS (PHYSICAL ACTIVITY)"
      ]
    },
    {
      day: "DAY 3 (20-09-2024)",
      activities: [
        "VTU/Autonomous Rules and Regulations",
        "UNIVERSAL HUMAN VALUES (UHV)",
        "INTERACTION WITH ALUMNI",
        "LITERARY ARTS & CREATIVE SKILLS"
      ]
    },
    {
      day: "DAY 4 (21-09-2024)",
      activities: [
        "INDUSTRIAL VISIT TO VISVESVARAYA INDUSTRIAL & TECHNOLOGICAL MUSEUM"
      ]
    },
    {
      day: "DAY 5 (21-09-2024)",
      activities: [
        "NSS ACTIVITY-SWATCH BHARATH ABHIYAN",
        "LOCAL AREA VISIT"
      ]
    },
    {
      day: "DAY 6 (23-09-2024)",
      activities: [
        "A TALK ON EMERGING TECHNOLOGIES: BLOCKCHAIN",
        "INTERACTION WITH STUDENT COUNSELOR-BIT WELL BEING CENTER",
        "EXTRA-CURRICULAR ACTIVITIES (CLUB ACTIVITIES)"
      ]
    }
  ];

  // Placeholder for 12 photos
  const photos = Array(12).fill({
    url: "https://i.imgur.com/NGi9z0C.png",
    caption: "Student Induction Program"
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Student Induction Program</h1>
            <p className="text-gray-300 text-lg">
              The Student Induction Programme aimed to familiarize new students with the academic environment, 
              promote personal growth, and integrate them into the campus culture. Department of Information 
              Science and Engineering organized following activities for Phase-I Student Induction Program.
            </p>
          </div>

          {/* Schedule Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {scheduleData.map((day, index) => (
              <div key={index} className="bg-zinc-900 rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-4 text-red-600">{day.day}</h3>
                <ul className="space-y-2">
                  {day.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-start gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Photos Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <div key={index} className="group relative aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
                  <img
                    src={photo.url}
                    alt={`Induction Program ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-2">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mascot Image */}
          <div className="fixed bottom-8 right-8 w-32 h-32 z-10">
            <img
              src="https://i.imgur.com/NGi9z0C.png"
              alt="Program Mascot"
              className="w-full h-full object-contain animate-bounce"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentInduction;