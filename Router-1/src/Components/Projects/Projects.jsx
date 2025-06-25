import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-container wip-container">
      <h1 className="projects-heading">Projects</h1>
      <div className="wip-message">
        <h2>Coming Soon</h2>
        <p>Our projects page is currently under development. Please check back later!</p>
        <div className="spinner" aria-label="Loading animation"></div>
      </div>
    </section>
  );
};

export default Projects;
