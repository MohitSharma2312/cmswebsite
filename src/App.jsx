import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Plx from 'react-plx'; // Import Plx
import './App.css';
import './components/navbar.jsx';
import Navbar from './components/navbar.jsx'; // Import Navbar
import Home from '../src/pages/home.jsx';
import Login from '../src/pages/Login.jsx';
import Item from '../src/pages/item.jsx';
import AboutUs from '../src/pages/about.jsx';
import ContactPage from '../src/pages/contact.jsx';

// Define your parallax data
const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: 'scale',
      },
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
    ],
  },
  {
    start: 300,
    end: 1000,
    properties: [
      {
        startValue: 2,
        endValue: 1,
        property: 'scale',
      },
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
    ],
  },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Correct usage
  const [profilePic, setProfilePic] = useState(''); // Add profilePic state

  // Simulate authentication (replace with your actual logic)
  const handleLogin = () => {
    setIsAuthenticated(true);
    setProfilePic('');
  };

  return (
    <div>
      {/* Show the Navbar only if authenticated */}
      {isAuthenticated && <Navbar isAuthenticated={isAuthenticated} profilePic={profilePic} />}
      <Plx parallaxData={parallaxData}> {/* Wrap your Routes with Plx */}
        <Routes>
          {/* Display the home page only if authenticated */}
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} />
          {/* Redirect to home if already authenticated */}
          <Route path="/" element={<Navigate to={isAuthenticated ? '/home' : '/login'} replace />} />
      
          {/* Display the login page */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          
          <Route path="/item" 
           element={
            isAuthenticated ? <Item /> : <Navigate to="/login" replace />
            } />

           <Route path="/about" 
           element={
            isAuthenticated ? <AboutUs /> : <Navigate to="/login" replace />
            } />
            
          <Route path="/contact" 
           element={
            isAuthenticated ? <ContactPage /> : <Navigate to="/login" replace />
            } />

        </Routes>
      </Plx>
    </div>
  );
}

export default App;
