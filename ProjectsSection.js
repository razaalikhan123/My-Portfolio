// src/components/ProjectsSection.js
import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import './ProjectsSection.css'; // Import the CSS file
import p1 from 'C:/Users/PC Mart/Desktop/porfolio real/port/src/p1.png';
import image2 from 'C:/Users/PC Mart/Desktop/porfolio real/port/src/p2.png';

const projects = [
  { name: 'Flick Vision Cinema', description: 'Flick Vision Cinema, built on .NET Framework using C#, offers a user-friendly platform for movie buffs. It boasts an extensive movie database, seamless navigation, and secure online ticketing. With modern design and responsive layout, it ensures an immersive movie experience across devices. Explore a wide range of films, access detailed information, and enjoy hassle-free booking. Flick Vision Cinema: Your ultimate destination for cinematic delight', image: p1 },
  { name: 'Focus First', description: 'Focus First" is a tailored application addressing challenges encountered by children with ADHD during study sessions. Developed on the .NET Framework using C#, it integrates a robust database for efficient data management. The primary objectives of the app include enhancing focus, fostering better study habits, creating a joyful learning atmosphere, and enabling progress tracking. By leveraging innovative features and user-friendly interfaces, "Focus First" aims to optimize learning experiences, making them both enjoyable and effective for children with ADHD.', image: image2 },
  // Add more projects here
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div style={{marginTop:'100px'}}>
    <section id="projects">
      <h1 style={{color:'#FFFFFF'}}><strong>Projects</strong></h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => openModal(project)}>
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <button onClick={() => openModal(project)}>Read More</button>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="modal-backdrop" onClick={closeModal}>
          <ProjectModal project={selectedProject} />
        </div>
      )}
    </section>
    </div>
  );
};

export default ProjectsSection;
