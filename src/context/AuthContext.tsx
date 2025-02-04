import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { saveUser, validateUser } from "../auth";

// Define types for context values
interface AuthContextType {
  user: User | null;  // Firebase User or null if not logged in
  signup: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

// Create the context with the specified types
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;  // Ensure that children are typed correctly
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Listen to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);  // Set the user object or null based on authentication state
    });

    return () => unsubscribe();
  }, []);

  const signup = async (email: string, password: string) => {
    try {
      const userCredential = await saveUser({ email, password });
      setUser(userCredential.user);  // Set user after successful signup
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await validateUser(email, password);
      setUser(userCredential.user);  // Set user after successful login
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);  // Set user to null after logout
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context in other components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

