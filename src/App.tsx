import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; 
import AuthPage from "./pages/AuthPage";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth(); 
  return user ? children : <Navigate to="/" />;
};

function App() {
  return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          {/* Public route */}
          <Route path="/" element={<AuthPage />} />

          {/* Protected routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/VissionMission"
            element={
              <ProtectedRoute>
                <div className="text-white p-8">Vission Mission</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/faculty-achievement"
            element={
              <ProtectedRoute>
                <div className="text-white p-8">Faculty Achievement Page</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/faculty-publication"
            element={
              <ProtectedRoute>
                <div className="text-white p-8">Faculty Publication Page</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/student-induction"
            element={
              <ProtectedRoute>
                <div className="text-white p-8">Student Induction Page</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/industrial-visit"
            element={
              <ProtectedRoute>
                <div className="text-white p-8">Industrial Visit Page</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/funded-projects"
            element={
              <ProtectedRoute>
                <div className="text-white p-8">Funded Projects Page</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/workshops"
            element={
              <ProtectedRoute>
                <div className="text-white p-8">Workshops and Trips Page</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/art-gallery"
            element={
              <ProtectedRoute>
                <div className="text-white p-8">Art Gallery Page</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/student-activities"
            element={
              <ProtectedRoute>
                <div className="text-white p-8">Student Activities Page</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/placement-stats"
            element={
              <ProtectedRoute>
                <div className="text-white p-8">Placement Statistics Page</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/lost-found"
            element={
              <ProtectedRoute>
                <div className="text-white p-8">Lost and Found Page</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <div className="text-white p-8">About Us Page</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <div className="text-white p-8">Profile Page</div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
  );
}

export default App;
