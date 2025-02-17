<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; 
import AuthPage from "./pages/AuthPage";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
=======
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Auth } from './pages/Auth';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import VissionMission from './pages/VIssionMission';
import FacultyAchievement from './pages/FacultyAchievement';
import FacultyPublication from './pages/FacultyPublication';
import StudentInduction from './pages/StudentInduction';
import IndustrialVisit from './pages/IndustrialVisit';
import FundedProjects from './pages/FundedProjects';
import WorkshopsandTrips from './pages/WorkshopsandTrips';
import ArtGallery from './pages/ArtGallery';
import StudentActivities from '/pages/StudentActivities';
import PlacementStatistics from '/pages/PlacementStatistics';
import AboutUs from './pages/AboutUs';

>>>>>>> f357e73 (removed auth)

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
                <VissionMission />
              </ProtectedRoute>
            }
          />
          <Route
            path="/faculty-achievement"
            element={
              <ProtectedRoute>
                <FacultyAchievement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/faculty-publication"
            element={
              <ProtectedRoute>
                <FacultyPublication />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student-induction"
            element={
              <ProtectedRoute>
                <StudentInduction />
              </ProtectedRoute>
            }
          />
          <Route
            path="/industrial-visit"
            element={
              <ProtectedRoute>
                <IndustrialVisit />
              </ProtectedRoute>
            }
          />
          <Route
            path="/funded-projects"
            element={
              <ProtectedRoute>
                <FundedProjects />
              </ProtectedRoute>
            }
          />
          <Route
            path="/workshops"
            element={
              <ProtectedRoute>
                <WorkshopsandTrips  />
              </ProtectedRoute>
            }
          />
          <Route
            path="/art-gallery"
            element={
              <ProtectedRoute>
                <ArtGallery />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student-activities"
            element={
              <ProtectedRoute>
                <StudentActivities />
              </ProtectedRoute>
            }
          />
          <Route
            path="/placement-stats"
            element={
              <ProtectedRoute>
                <PlacementStatistics />
              </ProtectedRoute>
            }
          />
          

          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <AboutUs />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
  );
}

export default App;
