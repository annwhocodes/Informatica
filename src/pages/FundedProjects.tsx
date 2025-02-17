import React from 'react';

const PlaceholderPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-600 mb-6">This page is under construction. Stay tuned!</p>
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-600 border-opacity-50"></div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
