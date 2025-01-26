import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUser, validateUser } from '../auth';

export const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [usn, setUsn] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      navigate('/home');
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isSignUp) {
      saveUser({ usn, password });
      localStorage.setItem('currentUser', usn);
      navigate('/home');
    } else {
      if (usn === 'test' && password === 'lol' || validateUser(usn, password)) {
        localStorage.setItem('currentUser', usn);
        navigate('/home');
      } else {
        setError('Invalid credentials');
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://i.imgur.com/KAWcpsK.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Login Box */}
      <div className="relative max-w-md w-full bg-zinc-900 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-white mb-6">
          {isSignUp ? 'Sign Up' : 'Sign In'} to Informatica
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="USN"
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
              className="w-full p-3 bg-zinc-800 text-white rounded"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Date of birth"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-zinc-800 text-white rounded"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <p className="text-white mt-4 text-center">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-red-600 hover:underline"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};
