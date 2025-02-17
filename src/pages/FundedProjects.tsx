import React from 'react';

function FundedProjects() {
  const projects = [
    {
      title: "NLP-BASED LEGAL CHATBOT",
      students: "Mr Anish Venkappa, Ms Ishita Singhal, Ms Janhvi Singh, Ms Pooja Harihar",
      guide: "Dr. Asha T",
      amount: "4,500",
      year: "2023-2024"
    },
    {
      title: "MAPPING FLOOD AFFECTED BUILDING AND ASSESSING DEPTH USING AERIAL IMAGERY",
      students: "Mr Dheeraj Yadav, Mr Deban K R Shahi, Mr MD Najish, Ms Sadhana S",
      guide: "Dr. M Shilpa",
      amount: "5000",
      year: "2023-2024"
    },
    {
      title: "BLOCKCHAIN-POWERED ESCROW:BUILDING DIGIYAL CONFIDENCE",
      students: "Mr. Raj Kumar, Mr. Raj Bagaria, Ms. Shreya, Ms. Shreya Narayan",
      guide: "Dr. Mercy S",
      amount: "4,000",
      year: "2023-2024"
    },
    {
      title: "DECENTRALISED EXCHANGE PLATFORM ON ETHEREUM BLOCKCHAIN USING CPMM ALOGRITHM",
      students: "Mr Sudhanshu Shekar",
      guide: "Dr. Mercy S",
      amount: "4,000",
      year: "2023-2024"
    },
    {
      title: "VIRTUAL DRESSING ROOM",
      students: "Mr Rohan H Raj, Ms Itishree Barik, Mr Nithesh Nag C, Mr Tanish C.S",
      guide: "Prof. Pavithra N",
      amount: "5000",
      year: "2023-2024"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Funded Projects</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-red-600">{project.title}</h2>
                
                <div className="space-y-4 text-gray-300">
                  <div className="flex flex-col md:flex-row gap-2">
                    <span className="font-semibold min-w-32">Students:</span>
                    <span>{project.students}</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-2">
                    <span className="font-semibold min-w-32">Guide:</span>
                    <span>{project.guide}</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-2">
                    <span className="font-semibold min-w-32">Amount:</span>
                    <span>₹{project.amount}</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-2">
                    <span className="font-semibold min-w-32">Year:</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FundedProjects;