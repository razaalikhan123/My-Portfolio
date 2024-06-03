// src/components/SkillsSection.js
import React from 'react';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa'; // Importing some icons from react-icons
import './SkillsSection.css';

const skills = [
{ name: <p style={{color:'#FFFFFF'}}>React</p>, icon: <FaReact style={{color: "#61dafb", backgroundColor:"black"}} /> },
{ name: <p style={{color:'#FFFFFF'}}>Node.js</p>, icon: <FaNode style={{color: "green"}} /> },
{ name: <p style={{color:'#FFFFFF'}}>HTML5</p>, icon: <FaHtml5 style={{color: "white",backgroundColor:"#E44D26"}} /> },
{ name: <p style={{color:'#FFFFFF'}}>CSS3</p>, icon: <FaCss3Alt style={{color: "white",backgroundColor:"#264de4"}} /> },
{ name: <p style={{color:'#FFFFFF'}}>JavaScript </p>, icon: <FaJsSquare style={{color: "white",backgroundColor:"#F7DF1E"}} /> },
// Add more skills here
];

const SkillsSection = () => (

  <section id="skills">
    <h1 style={{color:'#FFFFFF'}}><strong>Skills</strong></h1>
    <div className="skills-list">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <div className="skill-icon">{skill.icon}</div>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  </section>
);
export default SkillsSection;   