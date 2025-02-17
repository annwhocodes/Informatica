import React from 'react';
import Navbar from '../components/Navbar';

function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header section with images */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {/* Left Image */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Bangalore_Institute_of_Technology_logo.png/220px-Bangalore_Institute_of_Technology_logo.png" 
            alt="BIT Logo" 
            className="w-20 h-20"
          />
          
          {/* Heading */}
          <h1 className="text-4xl font-bold text-center">About Us</h1>

          {/* Right Image */}
          <img 
            src="https://i.imgur.com/3yOISJC.png" 
            alt="ISE Logo" 
            className="w-20 h-20"
          />
        </div>

        <div className="mb-16">
          <p className="text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto">
            The Department of Computer Science is committed to excellence in teaching,
            research, and innovation. Established in 1995, we have consistently
            maintained high standards in computer science education and research.
          </p>
          
          <div className="bg-zinc-900 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Department Highlights</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                State-of-the-art computing facilities
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                Experienced faculty with industry and research expertise
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                Strong industry connections
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                Active research community
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Creators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-900 rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <img 
                src="https://i.imgur.com/NGi9z0C.png"
                alt="Ananya Jha"
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-center mb-2">Ananya Jha</h3>
              <p className="text-gray-400 text-center">3rd year, ISE dept</p>
            </div>
            
            <div className="bg-zinc-900 rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <img 
                src="https://i.imgur.com/NGi9z0C.png"
                alt="Rajarshi Datta"
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-center mb-2">Rajarshi Datta</h3>
              <p className="text-gray-400 text-center">2nd year, ISE dept</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Developer's Society Club</h2>
          <p className="text-gray-300 mb-4">Department of ISE, BIT Bangalore</p>
          <a 
            href="https://www.instagram.com/devsoc_bit/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-500 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Follow us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
