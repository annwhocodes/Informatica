import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Effect to check localStorage for user and update state when the component mounts
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Login method - in a real app, you'd verify credentials with an API call
  const login = (email: string, password: string) => {
    // Basic authentication check for the example
    const user = { email };
    localStorage.setItem('user', JSON.stringify(user)); // Save to localStorage
    setUser(user); // Update state with the user
  };

  // Signup method - similar to login, but would save the user in your database in a real app
  const signup = (email: string, password: string) => {
    // Here you might want to store the user data in the database
    const user = { email };
    localStorage.setItem('user', JSON.stringify(user)); // Save to localStorage
    setUser(user); // Update state with the user
  };

  // Logout method - removes the user from localStorage and clears the state
  const logout = () => {
    localStorage.removeItem('user'); // Remove from localStorage
    setUser(null); // Clear state
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access Auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
