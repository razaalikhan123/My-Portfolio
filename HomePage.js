// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';

import './HomePage.css'; // Import the CSS file

const roles = ['Games app', 'Web Page', 'UI/UX web', 'Applications'];

const shuffleArray = (array) => {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

const HomePage = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [finalText, setFinalText] = useState(roles[roleIndex]);
  const [shuffledText, setShuffledText] = useState(shuffleArray(finalText.split('')));
  const [index, setIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);

  // Effect to handle typing out the text
  useEffect(() => {
    if (index < finalText.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + finalText[index]);
        setIndex(index + 1);
      }, 200); // Adjust the speed here
      return () => clearTimeout(timer);
    } else {
      // Start shuffling after 5 seconds
      setTimeout(() => {
        setIsShuffling(true);
      }, 5000);
    }
  }, [index, finalText]);

  // Effect to handle shuffling and resetting the text
  useEffect(() => {
    if (isShuffling) {
      const shuffleTimer = setInterval(() => {
        setShuffledText(shuffleArray(finalText.split('')));
      }, 100); // Adjust the shuffle speed here

      // Stop shuffling after 3 seconds, then reset the text
      const stopShufflingTimer = setTimeout(() => {
        clearInterval(shuffleTimer);
        setText('');
        setIndex(0);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Switch to the next role
        setFinalText(roles[(roleIndex + 1) % roles.length]);
        setIsShuffling(false);
      }, 3000);

      return () => {
        clearInterval(shuffleTimer);
        clearTimeout(stopShufflingTimer);
      };
    }
  }, [isShuffling, finalText, roleIndex]);

  return (
    <div style={{marginTop:'100px'}}>
      <section id="welcome" className="welcome-section">
        <h1 style={{color:'#FFFFFF'}}><strong>Welcome to My Portfolio</strong></h1>
        <h2 style={{color:'#FFFFFF'}}><strong>Hi, my name is Raza Ali Khan.</strong></h2>
        <h2 style={{color:'#FFFFFF'}}><strong>I develop and design {` `}
          <span className="shuffled-text">
            <strong>{text}</strong>
            {shuffledText.slice(text.length).join('')}
          </span>
        </strong></h2>
        
      </section>
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
