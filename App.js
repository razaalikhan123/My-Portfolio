// src/App.js
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';
import ScrollIndicator from './ScrollIndicator';
import backgroundImage from 'C:/Users/PC Mart/Desktop/porfolio real/port/src/wall.png'; // Import the background image
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';


function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%', // Adjust height as needed
        width: '100%', // Adjust width to cover the whole screen
      }}
    >
      <Router>
           <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </Router>
      <ScrollIndicator />
      
    </div>
  );
}

export default App;
