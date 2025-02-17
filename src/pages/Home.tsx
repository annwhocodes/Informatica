import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Award, BookOpen } from 'lucide-react';

const features = [
  { title: 'Vision and Mission', color: 'bg-blue-600' },
  { title: 'Faculty Achievement', color: 'bg-red-600' },
  { title: 'Faculty Publication', color: 'bg-green-600' },
  { title: 'Student Induction', color: 'bg-purple-600' },
  { title: 'Industrial Visit', color: 'bg-yellow-600' },
  { title: 'Funded Projects', color: 'bg-pink-600' },
  { title: 'Workshops and Trips', color: 'bg-indigo-600' },
  { title: 'Art Gallery', color: 'bg-orange-600' },
  { title: 'Student Activities', color: 'bg-teal-600' },
  { title: 'Placement Statistics', color: 'bg-cyan-600' },
].map(feature => ({
  ...feature,
  path: '/' + feature.title.toLowerCase().replace(/\s+/g, '-')
}));

const updates = [
  {
    title: 'New Research Paper Published',
    description: 'Department faculty publishes groundbreaking research in AI and Machine Learning',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    icon: BookOpen
  },
  {
    title: 'Workshop on AI, Web, UI/UX, Cybersecurity and Cloud',
    description: 'Devsoc has conducted a 3 day session for all the juniors.',
    date: '27 November, 2024',
    image: 'https://i.imgur.com/cJ7uMcc.jpeg',
    icon: Calendar
  },
  {
    title: 'Student Achievement Highlights',
    description: 'Gautam Sharma from 2nd year wins 2nd place in amBITion, conducted by GDSC-BIT.',
    date: 'July 7, 2024',
    image: 'https://pbs.twimg.com/media/GSDHJoNacAAs_33?format=jpg&name=900x900',
    icon: Award
  }
];

export const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/cy0pxND.png')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="container mx-auto h-full flex flex-col justify-center px-4">
            <h1 className="text-5xl font-bold mb-4">Welcome to Informatica!</h1>
            <p className="text-xl mb-6">Discover the latest in Information science and technology.</p>
            <button className="bg-red-600 text-white px-8 py-2 rounded hover:bg-red-700 w-fit">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Explore Informatica</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.path}
              to={feature.path}
              className="group flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105"
            >
              <div className={`relative w-32 h-32 rounded-lg ${feature.color} flex items-center justify-center overflow-hidden group-hover:ring-4 ring-white`}>
                <img 
                  src="https://i.imgur.com/NGi9z0C.png" 
                  alt="Profile Icon"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <span className="text-center font-medium text-sm">{feature.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Latest Updates */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((update, index) => (
            <div 
              key={index}
              className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${update.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <update.icon className="w-5 h-5 text-red-600" />
                  <span className="text-sm text-gray-400">{update.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
                <p className="text-gray-400 text-sm">{update.description}</p>
                <button className="mt-4 text-red-600 hover:text-red-500 text-sm font-medium flex items-center gap-1">
                  Read more <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};