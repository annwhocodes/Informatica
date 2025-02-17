import React from 'react';

function VisionMission() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Vision & Mission</h1>
        
        {/* HOD's Message */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="flex-shrink-0">
                  <img 
                    src="https://i.imgur.com/NGi9z0C.png"
                    alt="Dr. Asha.T"
                    className="w-48 h-48 rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">From HOD's Desk</h2>
                  <h3 className="text-xl text-red-600 mb-4">-Dr. Asha.T</h3>
                </div>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  The motto of the department being quality education and skill empowerment, ISE 
                  department tries to impart valuable technical knowledge and programming skills 
                  through highly qualified and experienced faculty. The department has a team of highly 
                  qualified and experienced faculty. The department has a team of highly qualified and 
                  experienced faculty to support its education endeavours with 60% of them being 
                  doctorates. The department seeks to combine excellence in education and research with 
                  service to the society and industry.
                </p>
                <p>
                  The department strives to provide excellence in curricular training and skill 
                  development for its students by using adequate infrastructure, state of art laboratories 
                  and innovative teaching-learning atmosphere to engage in continuous learning and 
                  research. We are proud to have experienced, dedicated academic and technical staff to 
                  support our program in providing a well-balanced professional development to our 
                  students. Students are encouraged to participate in hackathon and other technical 
                  competition and events at national and international levels and have won prizes.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Vision Section */}
          <div className="bg-zinc-900 rounded-lg overflow-hidden mb-8 hover:scale-105 transition-transform duration-300">
            <div className="h-64 relative">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-4xl font-bold text-white">Vision</h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Empower every student to be innovative, creative and productive in the field 
                of Information Technology by imparting quality technical education, developing 
                skills and inculcating human values.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="h-64 relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Mission"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-4xl font-bold text-white">Mission</h2>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <p>To evolve continually as a Centre of Excellence in offering quality Information Technology Education.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <p>To nurture the students to meet the global competency in industry for Employment.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <p>To promote collaboration with industry and academia for constructive interaction to empower Entrepreneurship.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <p>To provide reliable, contemporary and integrated technology to support and facilitate Teaching, Learning, Research and Service.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionMission;