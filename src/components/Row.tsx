import React from 'react';

interface RowProps {
  title: string;
  items: {
    title: string;
    description: string;
    image: string;
  }[];
}

const Row: React.FC<RowProps> = ({ title, items }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div 
            key={index}
            className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;