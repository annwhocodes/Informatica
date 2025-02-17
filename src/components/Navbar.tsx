import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, User as UserIcon, Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleSignOut = () => {
    logout();
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400 text-2xl font-bold">
            Informatica
          </span>
        </Link>
        <div className="flex items-center gap-6">
          {user && (
            <>
              <Link to="/about" className="hover:text-red-600 flex items-center">
                <img
                  src="https://i.imgur.com/xVQN76e.png"
                  alt="About Icon"
                  className="w-6 h-6"
                />
              </Link>
              <button onClick={handleSignOut} className="hover:text-red-600">
                <LogOut className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar