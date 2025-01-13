import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, User as UserIcon, Search } from 'lucide-react';

export const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('currentUser');

  const handleSignOut = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://i.imgur.com/xVQN76e.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400 text-2xl font-bold"
          >
            Informatica
          </span>
        </Link>
        <div className="flex items-center gap-6">
          {isAuthenticated && (
            <>
              <Link to="/lost-found" className="hover:text-red-600 flex items-center gap-1">
                <Search className="w-5 h-5" />
              </Link>
              <Link to="/about" className="hover:text-red-600 flex items-center">
                <img
                  src="https://i.imgur.com/xVQN76e.png"
                  alt="About Icon"
                  className="w-6 h-6"
                />
              </Link>
              <Link to="/profile" className="hover:text-red-600">
                <UserIcon className="w-6 h-6" />
              </Link>
              <button
                onClick={handleSignOut}
                className="hover:text-red-600"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
