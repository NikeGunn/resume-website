import React from 'react';

const ProjectCard = ({ link }) => {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">Live Demo : {link}</a>
    </div>
  );
};

export default ProjectCard;
