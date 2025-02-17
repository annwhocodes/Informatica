<<<<<<< HEAD:src/pages/AuthPage.tsx
// src/pages/AuthPage.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
=======
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
  const [usn, setUsn] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
>>>>>>> f357e73 (removed auth):src/pages/Auth.tsx
  const navigate = useNavigate();
  const { user, signup, login } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

<<<<<<< HEAD:src/pages/AuthPage.tsx
    try {
      if (isSignUp) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
      navigate("/home");
    } catch (error: any) {
      setError(error.message);
=======
    // Only accept "ise123" as the password
    if (password === 'ise123') {
      localStorage.setItem('currentUser', usn);
      navigate('/home');
    } else {
      setError('Invalid credentials');
>>>>>>> f357e73 (removed auth):src/pages/Auth.tsx
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://i.imgur.com/KAWcpsK.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-md w-full bg-zinc-900 rounded-lg p-8">
<<<<<<< HEAD:src/pages/AuthPage.tsx
        <h2 className="text-3xl font-bold text-white mb-6">
          {isSignUp ? "Sign Up" : "Sign In"} to Informatica
        </h2>
=======
        <h2 className="text-3xl font-bold text-white mb-6">Sign In to Informatica</h2>
>>>>>>> f357e73 (removed auth):src/pages/Auth.tsx
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-zinc-800 text-white rounded"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
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
<<<<<<< HEAD:src/pages/AuthPage.tsx
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="text-white mt-4 text-center">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-red-600 hover:underline"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
=======
            Sign In
          </button>
        </form>
>>>>>>> f357e73 (removed auth):src/pages/Auth.tsx
      </div>
    </div>
  );
};

export default AuthPage; // Ensure this is a default export
